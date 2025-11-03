import React, { FC } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const OrderQuantityButton: FC<{
  value: number;
  onChange: (quantity: number) => void;
}> = ({ value, onChange }) => {
  const handleDecrease = () => {
    if (value > 1) {
      onChange(-1);
    }
  };

  const handleIncrease = () => {
    onChange(1);
  };

  return (
    <div className="gap-x-2 flex items-center">
      <button
        onClick={handleDecrease}
        type="button"
        disabled={value <= 1}
        className={`flex items-center justify-center w-6 h-6 border rounded focus:ring-primary focus:ring-1 ${
          value <= 1
            ? "text-neutral-300 border-neutral-300 cursor-not-allowed"
            : "text-neutral-400 border-neutral-400"
        }`}
      >
        <AiOutlineMinus />
      </button>

      <div className="flex-1 flex justify-center items-center">
        <span className="font-medium text-base">{value}</span>
      </div>

      <button
        onClick={handleIncrease}
        type="button"
        className="flex items-center justify-center w-6 h-6 border rounded text-neutral-400 border-neutral-400 focus:ring-primary focus:ring-1"
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};
