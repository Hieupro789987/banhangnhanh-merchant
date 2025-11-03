import { useOrder } from "@/components/features/order/provider/order-provider";
import Section from "@/components/shared/common/section";
import Textarea from "@/components/shared/common/textarea";
import { debounce } from "lodash";
import React, { useCallback, useState } from "react";

const OrderNote = () => {
  const { updateOrderInput } = useOrder();

  return (
    <div className="bg-white p-4 shadow-card rounded-lg">
      <Section title="Ghi chú đơn hàng">
        <Textarea
          className="mt-3"
          placeholder="Nhập ghi chú đơn hàng..."
          rows={4}
          onChange={(val) => updateOrderInput({ note: val })}
        />
      </Section>
    </div>
  );
};

export default OrderNote;
