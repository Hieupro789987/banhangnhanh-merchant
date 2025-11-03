// components/shared/common/debounced-textarea.tsx
import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";

interface TextareaProps {
  value?: string;
  onChange: (value: string) => void;
  delay?: number;
  placeholder?: string;
  rows?: number;
  className?: string;
  disabled?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  value: externalValue = "",
  onChange,
  delay = 500,
  placeholder = "",
  rows = 4,
  className = "",
  disabled = false,
}) => {
  const [internalValue, setInternalValue] = useState(externalValue);

  useEffect(() => {
    setInternalValue(externalValue);
  }, [externalValue]);

  const debouncedOnChange = useCallback(
    debounce((value: string) => {
      onChange(value);
    }, delay),
    [onChange, delay]
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    debouncedOnChange(newValue);
  };

  useEffect(() => {
    return () => {
      debouncedOnChange.cancel();
    };
  }, [debouncedOnChange]);

  return (
    <textarea
      className={`textarea-custom w-full p-3 text-sm rounded-lg bg-transparent ${className}`}
      placeholder={placeholder}
      rows={rows}
      value={internalValue}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default Textarea;
