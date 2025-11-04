import { Label } from "@/components/shared/common/form/label";
import React from "react";

interface RadioProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  label?: string;
}

const Radio: React.FC<RadioProps> = ({
  checked,
  onChange,
  disabled = false,
  size = "medium",
  className = "",
  label,
}) => {
  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "w-4 h-4";
      case "large":
        return "w-6 h-6";
      default:
        return "w-5 h-5";
    }
  };

  const getDotSize = () => {
    switch (size) {
      case "small":
        return "w-2 h-2";
      case "large":
        return "w-3 h-3";
      default:
        return "w-2.5 h-2.5";
    }
  };

  return (
    <div
      className={`flex items-center gap-3 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      onClick={handleClick}
    >
      <div
        className={`
          ${getSizeClasses()}
          border-2 rounded-full flex items-center justify-center
          transition-all duration-200 ease-in-out
          ${
            checked
              ? "border-primary bg-primary"
              : "border-gray-300 bg-white hover:border-primary"
          }
          ${disabled && "bg-gray-100 border-gray-300"}
        `}
      >
        {checked && (
          <div
            className={`
              ${getDotSize()}
              bg-white rounded-full
              transition-all duration-200 ease-in-out
            `}
          />
        )}
      </div>

      {label && (
        <Label
          className={`text-subtitle select-none ${
            disabled ? "text-gray-400" : ""
          }`}
          text={label}
        ></Label>
      )}
    </div>
  );
};

export default Radio;
