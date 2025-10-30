// components/form/Select.tsx
import { Select as ZaloSelect } from "zmp-ui";
import { ReactNode, useEffect } from "react";
import { SelectValueType } from "zmp-ui/select";

const { OtpGroup, Option } = ZaloSelect;
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: SelectValueType | SelectValueType[]) => void;
  options?: SelectOption[];
  multiple?: boolean;
  className?: string;
  closeOnSelect?: boolean;
}

export default function Select(props: SelectProps) {
  const {
    label,
    helperText,
    placeholder = "Chọn...",
    error,
    disabled,
    value,
    defaultValue,
    onChange,
    options = [],
    multiple,
    className = "",
    closeOnSelect,
    ...rest
  } = props;

  useEffect(() => {
    if (defaultValue) {
      onChange?.(defaultValue);
    }
  }, [defaultValue]);

  return (
    <ZaloSelect
      className={`h-12 placeholder:text-sm text-sm  zaui-select-suffix-hidden ${className}`}
      label={label}
      helperText={helperText}
      placeholder={placeholder}
      errorText={error}
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
      onChange={(selected) => {
        if (selected) {
          onChange?.(selected);
        }
      }}
      closeOnSelect={closeOnSelect}
      multiple={multiple}
      {...rest}
    >
      {options.map((option) => (
        <Option
          key={option.value}
          value={option.value}
          title={option.label}
          disabled={option.disabled}
        />
      ))}
    </ZaloSelect>
  );
}

export { Option as Option };
