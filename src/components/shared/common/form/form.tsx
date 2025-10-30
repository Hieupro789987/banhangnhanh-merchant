import { FormFooter } from "@/components/shared/common/form/footer";
import { cloneDeep } from "lodash";
import { createContext, useContext, useEffect } from "react";
import {
  FormProvider,
  useForm,
  UseFormReturn,
  FieldValues,
} from "react-hook-form";

interface FormProps<T = FieldValues> {
  defaultValues?: T;
  onSubmit?: (values: T) => void | Promise<void>;
  onError?: (errors: any) => void;
  children: React.ReactNode;
  className?: string;
}

export function Form<T = FieldValues>({
  defaultValues,
  onSubmit,
  onError,
  children,
  className = "",
}: FormProps<T>) {
  const methods = useForm({
    defaultValues: cloneDeep(defaultValues) as any,
  });

  const handleSubmit = async (data: T) => {
    try {
      if (onSubmit) {
        await onSubmit(data);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const handleError = (errors: any) => {
    if (onError) {
      onError(errors);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className={className}
        onSubmit={
          onSubmit ? methods.handleSubmit(handleSubmit, handleError) : undefined
        }
      >
        {children}
      </form>
    </FormProvider>
  );
}
Form.Footer = FormFooter;
