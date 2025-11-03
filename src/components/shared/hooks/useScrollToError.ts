// hooks/useScrollToError.ts
import { useEffect, useRef } from "react";
import { useFormState } from "react-hook-form";

export function useScrollToError() {
  const { errors, isSubmitting } = useFormState();
  const submittedRef = useRef(false);

  useEffect(() => {
    if (isSubmitting) {
      submittedRef.current = true;
    }
  }, [isSubmitting]);

  useEffect(() => {
    if (submittedRef.current && Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.querySelector(
        `[data-field="${firstErrorField}"]`
      );

      if (errorElement) {
        errorElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        const input = errorElement.querySelector("input, textarea, select");
        if (input) {
          (input as HTMLElement).focus();
        }
      }

      submittedRef.current = false;
    }
  }, [errors]);
}
