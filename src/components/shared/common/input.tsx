import { Input as ZaloInput } from "zmp-ui";
import { forwardRef, useCallback, useMemo, useState, useEffect } from "react";
import { debounce } from "lodash";

const {
  Password: ZaloPassword,
  Search: ZaloSearch,
  TextArea: ZaloTextArea,
  OTP: ZaloOTP,
} = ZaloInput;

type InputRef = React.ComponentRef<typeof ZaloInput>;
type PasswordRef = React.ComponentRef<typeof ZaloPassword>;
type SearchRef = React.ComponentRef<typeof ZaloSearch>;
type TextAreaRef = React.ComponentRef<typeof ZaloTextArea>;
type OTPRef = React.ComponentRef<typeof ZaloOTP>;

interface BaseInputProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
  status?: "normal" | "success" | "error";
  errorText?: string;
  disabled?: boolean;
  clearable?: boolean | { mode?: "always" | "focus" };
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;

  debounce?: number; // Optional - nếu có thì mới debounce

  name?: string;
  className?: string;
}

export interface InputProps extends BaseInputProps {
  type?: "number" | "text" | "password";
}

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    value,
    defaultValue,
    onChange,
    debounce: debounceTime,
    ...rest
  } = props;

  // Local state để cập nhật UI ngay lập tức
  const [localValue, setLocalValue] = useState(value ?? defaultValue ?? "");

  // Sync với controlled value từ props
  useEffect(() => {
    if (value !== undefined) {
      setLocalValue(value);
    }
  }, [value]);

  // Tạo debounced onChange chỉ khi có debounceTime
  const debouncedOnChange = useMemo(() => {
    if (onChange && debounceTime !== undefined && debounceTime > 0) {
      return debounce(onChange, debounceTime);
    }
    return onChange;
  }, [onChange, debounceTime]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      // Cập nhật UI ngay lập tức
      setLocalValue(newValue);

      // Gọi onChange (có hoặc không debounce)
      if (debouncedOnChange) {
        debouncedOnChange(newValue);
      } else if (onChange) {
        // Không có debounce - gọi onChange ngay lập tức
        onChange(newValue);
      }
    },
    [debouncedOnChange, onChange]
  );

  return (
    <ZaloInput ref={ref} value={localValue} {...rest} onChange={handleChange} />
  );
});

Input.displayName = "Input";

export interface InputPasswordProps extends Omit<BaseInputProps, "type"> {
  visibilityToggle?: boolean;
}

const InputPassword = forwardRef<PasswordRef, InputPasswordProps>(
  (props, ref) => {
    const {
      value,
      defaultValue,
      onChange,
      debounce: debounceTime,
      ...rest
    } = props;

    const [localValue, setLocalValue] = useState(value ?? defaultValue ?? "");

    useEffect(() => {
      if (value !== undefined) {
        setLocalValue(value);
      }
    }, [value]);

    const debouncedOnChange = useMemo(() => {
      if (onChange && debounceTime !== undefined && debounceTime > 0) {
        return debounce(onChange, debounceTime);
      }
      return onChange;
    }, [onChange, debounceTime]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setLocalValue(newValue);

        if (debouncedOnChange) {
          debouncedOnChange(newValue);
        } else if (onChange) {
          onChange(newValue);
        }
      },
      [debouncedOnChange, onChange]
    );

    return (
      <ZaloPassword
        ref={ref}
        value={localValue}
        {...rest}
        onChange={handleChange}
      />
    );
  }
);

InputPassword.displayName = "InputPassword";

export interface InputSearchProps extends Omit<BaseInputProps, "type"> {
  loading?: boolean;
  onSearch?: (value: string) => void;
}

const InputSearch = forwardRef<SearchRef, InputSearchProps>((props, ref) => {
  const {
    value,
    defaultValue,
    onChange,
    onSearch,
    debounce: debounceTime,
    ...rest
  } = props;

  const [localValue, setLocalValue] = useState(value ?? defaultValue ?? "");

  useEffect(() => {
    if (value !== undefined) {
      setLocalValue(value);
    }
  }, [value]);

  // Debounce cho onChange
  const debouncedOnChange = useMemo(() => {
    if (onChange && debounceTime !== undefined && debounceTime > 0) {
      return debounce(onChange, debounceTime);
    }
    return onChange;
  }, [onChange, debounceTime]);

  // Debounce cho onSearch
  const debouncedOnSearch = useMemo(() => {
    if (onSearch && debounceTime !== undefined && debounceTime > 0) {
      return debounce(onSearch, debounceTime);
    }
    return onSearch;
  }, [onSearch, debounceTime]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalValue(newValue);

      if (debouncedOnChange) {
        debouncedOnChange(newValue);
      } else if (onChange) {
        onChange(newValue);
      }
    },
    [debouncedOnChange, onChange]
  );

  const handleSearch = useCallback(
    (value: string) => {
      if (debouncedOnSearch) {
        debouncedOnSearch(value);
      } else if (onSearch) {
        onSearch(value);
      }
    },
    [debouncedOnSearch, onSearch]
  );

  return (
    <ZaloSearch
      ref={ref}
      value={localValue}
      {...rest}
      onChange={handleChange}
      onSearch={handleSearch}
    />
  );
});

InputSearch.displayName = "InputSearch";

export interface InputTextAreaProps extends Omit<BaseInputProps, "type"> {
  showCount?: boolean;
  maxLength?: number;
  rows?: number;
}

const InputTextArea = forwardRef<TextAreaRef, InputTextAreaProps>(
  (props, ref) => {
    const {
      value,
      defaultValue,
      onChange,
      debounce: debounceTime,
      ...rest
    } = props;

    const [localValue, setLocalValue] = useState(value ?? defaultValue ?? "");

    useEffect(() => {
      if (value !== undefined) {
        setLocalValue(value);
      }
    }, [value]);

    const debouncedOnChange = useMemo(() => {
      if (onChange && debounceTime !== undefined && debounceTime > 0) {
        return debounce(onChange, debounceTime);
      }
      return onChange;
    }, [onChange, debounceTime]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setLocalValue(newValue);

        if (debouncedOnChange) {
          debouncedOnChange(newValue);
        } else if (onChange) {
          onChange(newValue);
        }
      },
      [debouncedOnChange, onChange]
    );

    return (
      <ZaloTextArea
        ref={ref}
        value={localValue}
        {...rest}
        onChange={handleChange}
      />
    );
  }
);

InputTextArea.displayName = "InputTextArea";

export interface InputOTPProps {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  otpLength?: number;
  show?: boolean;
  disabled?: boolean;
  debounce?: number;
}

const InputOTP = forwardRef<OTPRef, InputOTPProps>((props, ref) => {
  const {
    value,
    defaultValue,
    onChange,
    debounce: debounceTime,
    ...rest
  } = props;

  const [localValue, setLocalValue] = useState(value ?? defaultValue ?? "");

  useEffect(() => {
    if (value !== undefined) {
      setLocalValue(value);
    }
  }, [value]);

  const debouncedOnChange = useMemo(() => {
    if (onChange && debounceTime !== undefined && debounceTime > 0) {
      return debounce(onChange, debounceTime);
    }
    return onChange;
  }, [onChange, debounceTime]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalValue(newValue);

      if (debouncedOnChange) {
        debouncedOnChange(newValue);
      } else if (onChange) {
        onChange(newValue);
      }
    },
    [debouncedOnChange, onChange]
  );

  return (
    <ZaloOTP
      ref={ref}
      value={localValue}
      defaultValue={defaultValue || ""}
      {...rest}
      onChange={handleChange}
    />
  );
});

InputOTP.displayName = "InputOTP";

const InputWithComponents = Object.assign(Input, {
  Password: InputPassword,
  Search: InputSearch,
  TextArea: InputTextArea,
  OTP: InputOTP,
});

export default InputWithComponents;
