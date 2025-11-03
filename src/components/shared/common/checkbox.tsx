import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
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

  const getIconSize = () => {
    switch (size) {
      case "small":
        return "14";
      case "large":
        return "18";
      default:
        return "16";
    }
  };

  return (
    <div
      className={`flex items-center gap-3 cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      onClick={handleClick}
    >
      {/* Checkbox Box */}
      <div
        className={`
          ${getSizeClasses()}
          border-2 rounded flex items-center justify-center
          transition-all duration-200 ease-in-out
          ${
            checked
              ? "bg-primary border-primary"
              : "bg-white border-[#D0D5DD] hover:border-primary"
          }
          ${disabled ? "bg-neutral-100 border-neutral-300" : "cursor-pointer"}
        `}
      >
        {/* Check Icon */}
        {checked && (
          <svg
            width={getIconSize()}
            height={getIconSize()}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {/* Label */}
      {label && (
        <span
          className={`text-[#4E5461] select-none ${
            disabled ? "text-neutral-400" : ""
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default Checkbox;
