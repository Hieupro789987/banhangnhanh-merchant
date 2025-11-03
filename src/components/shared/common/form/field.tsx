import { Children, cloneElement, ReactElement } from "react";
import { Controller, useFormContext, useFormState } from "react-hook-form";

export type ResolverFunction = (value: any, values: any) => string;
export type FormResolverFunction = (values: any) => string;

export type Validation = {
  required?: boolean;
  min?: number;
  max?: number;
  email?: boolean;
  phone?: boolean;
  password?: boolean;
  code?: boolean;
  slug?: boolean;
  pattern?: RegExp;
  validate?: (value: any) => string | boolean;
  [key: string]:
    | ResolverFunction
    | boolean
    | number
    | RegExp
    | ((value: any) => string | boolean)
    | undefined;
};
export interface FieldProps {
  name: string;
  label?: string;
  required?: boolean;
  children: ReactElement;
  className?: string;
  validation?: Partial<Validation>;
  readOnly?: boolean;
}

export function Field({
  name,
  label,
  required = false,
  readOnly = false,
  children,
  className = "",
  validation,
}: FieldProps) {
  const { control, watch } = useFormContext();
  const { errors, isSubmitting } = useFormState();
  const value = name ? watch(name) : undefined;
  const error = errors[name]?.message as string;
  const child = Children.toArray(children)[0] as ReactElement;

  const getRules = () => {
    const rules: any = {
      required: required ? "Trường này là bắt buộc!" : false,
    };

    if (validation?.min !== undefined) {
      if (child.props.type === "number" || child.props.number) {
        rules.min = {
          value: validation.min,
          message: `Giá trị phải lớn hơn hoặc bằng ${validation.min}`,
        };
      } else {
        rules.minLength = {
          value: validation.min,
          message: `Ít nhất ${validation.min} ký tự`,
        };
      }
    }

    if (validation?.max !== undefined) {
      if (child.props.type === "number" || child.props.number) {
        rules.max = {
          value: validation.max,
          message: `Giá trị phải nhỏ hơn hoặc bằng ${validation.max}`,
        };
      } else {
        rules.maxLength = {
          value: validation.max,
          message: `Tối đa ${validation.max} ký tự`,
        };
      }
    }

    if (validation?.pattern) {
      rules.pattern = {
        value: validation.pattern,
        message: "Giá trị không đúng định dạng",
      };
    } else if (validation?.email) {
      rules.pattern = {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Email không hợp lệ",
      };
    } else if (validation?.phone) {
      rules.pattern = {
        value: /^(0|\+84)(3[2-9]|5[2689]|7[06-9]|8[1-689]|9[0-46-9])[0-9]{7}$/,
        message: "Số điện thoại không hợp lệ",
      };
    } else if (validation?.code || validation?.slug) {
      rules.pattern = {
        value: /^([a-zA-Z0-9])(?:[-_a-zA-Z0-9])*$/,
        message: "Chỉ gồm ký tự, số, gạch nối và gạch dưới",
      };
    }

    if (validation?.password) {
      rules.minLength = {
        value: 8,
        message: "Mật khẩu phải có ít nhất 8 ký tự",
      };
    }

    const validateFunctions: any = {};

    if (validation?.validate) {
      if (typeof validation.validate === "function") {
        validateFunctions.custom = validation.validate;
      } else if (typeof validation.validate === "object") {
        Object.assign(validateFunctions, validation.validate);
      }
    }

    if (validation) {
      for (const [key, value] of Object.entries(validation)) {
        if (typeof value === "function" && key !== "validate") {
          validateFunctions[key] = value;
        }
      }
    }

    if (Object.keys(validateFunctions).length > 0) {
      rules.validate = validateFunctions;
    }

    return rules;
  };

  const rules = getRules();

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        shouldUnregister={true}
        render={({ field }) =>
          cloneElement(child, {
            ...child.props,
            value: value ?? "",
            name: name,
            onChange: (...args: any[]) => {
              field.onChange(...args);
              child.props.onChange?.(...args);
            },
            onBlur: (...args: any[]) => {
              field.onBlur();
              child.props.onBlur?.(...args);
            },
            disabled: readOnly || isSubmitting || child.props.disabled,
            error: error,
          })
        }
      />

      <div className="h-4 mb-1">
        {error && <p className="text-danger text-right text-xs">{error}</p>}
      </div>
    </div>
  );
}
