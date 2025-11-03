import { useOrder } from "@/components/features/order/provider/order-provider";
import { parseNumber } from "@/components/shared/utils/format";
import React from "react";
import { Button } from "zmp-ui";
import { FiAlertTriangle } from "react-icons/fi";
import { useVirtualKeyboardVisible } from "@/components/shared/hooks/useVirtualKeyboardVisible";
const OrderSummary = () => {
  const keyboardVisible = useVirtualKeyboardVisible();
  const { state } = useOrder();

  if (keyboardVisible) return null;
  return (
    <div className="sticky bottom-0 left-0 p-4 bg-white shadow-lg pb-sb">
      {state.error && (
        <div className="bg-red-600 rounded-lg px-3 py-1 mb-2 text-white text-xs flex items-center">
          <FiAlertTriangle className="text-xs mr-1.5" />
          {state.error}
        </div>
      )}
      <div className="flex justify-between items-center ">
        <div>
          Tổng:{" "}
          {state.loading ? (
            <span className="loading-ellipsis text-xl"></span>
          ) : (
            <span className="font-bold text-danger text-xl">
              {parseNumber(state.draftOrder?.order?.amount)}đ
            </span>
          )}
        </div>
        <Button loading={state.loading} disabled={!!state.error}>
          Thanh toán
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
