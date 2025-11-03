import { Option, ReactProps } from "@/types";
import React from "react";

interface Props extends ReactProps {
  options?: Option[];
  value: any;
  label?: string;
  type?: StatusLabelType;
  extraClassName?: string;
  maxContent?: boolean;
  labelClassName?: string;
}

export type StatusLabelType = "label" | "text" | "light";

const STATUS_COLOR_MAP: {
  [key: string]: {
    text: string;
    bg: string;
    lightBg: string;
  };
} = {
  warning: {
    text: "text-yellow-600",
    bg: "bg-yellow-500",
    lightBg: "bg-yellow-100",
  },
  info: {
    text: "text-blue-700",
    bg: "bg-blue-500",
    lightBg: "bg-blue-100",
  },
  purple: {
    text: "text-purple-700",
    bg: "bg-purple-500",
    lightBg: "bg-purple-100",
  },
  success: {
    text: "text-green-700",
    bg: "bg-green-500",
    lightBg: "bg-green-100",
  },
  danger: {
    text: "text-red-700",
    bg: "bg-red-500",
    lightBg: "bg-red-100",
  },
  slate: {
    text: "text-gray-700",
    bg: "bg-gray-500",
    lightBg: "bg-gray-100",
  },
  orange: {
    text: "text-orange-700",
    bg: "bg-orange-500",
    lightBg: "bg-orange-100",
  },
  teal: {
    text: "text-teal-700",
    bg: "bg-teal-500",
    lightBg: "bg-teal-100",
  },
};

export function StatusLabel({
  value,
  options,
  type = "label",
  className = "px-2 py-0.5 text-xs font-semibold rounded-3xl whitespace-nowrap",
  extraClassName = "",
  labelClassName = "",
  maxContent,
  style = {},
  ...props
}: Props) {
  const option = options?.find((x) => x.value === value);
  const color = option?.color || "slate";
  const label = props.label || option?.label || "Không có";

  const colorClasses = STATUS_COLOR_MAP[color] || STATUS_COLOR_MAP["slate"];

  const longestText =
    maxContent &&
    options?.reduce((acc, curr) => {
      return acc.length <= curr.label.length ? curr.label : acc;
    }, "");

  const getStyles = () => {
    switch (type) {
      case "label":
        return `${colorClasses.bg} text-white`;
      case "light":
        return `${colorClasses.lightBg} ${colorClasses.text}`;
      case "text":
      default:
        return `${colorClasses.text} bg-transparent`;
    }
  };

  return (
    <span
      className={`${className} ${extraClassName} ${getStyles()} ${
        maxContent && "inline-grid"
      }`}
      style={style}
    >
      {maxContent && (
        <span className="col-start-1 col-end-auto row-start-1 row-end-auto opacity-0 min-w-max">
          {longestText}
        </span>
      )}
      <span
        className={`${
          maxContent &&
          "col-start-1 col-end-auto row-start-1 row-end-auto text-center "
        } ${labelClassName}`}
      >
        {label}
      </span>
    </span>
  );
}
