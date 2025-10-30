import OrderSummary from "@/components/features/order/components/create-order/components/order-summary";
import PickupMethod from "@/components/features/order/components/create-order/components/pickupMethod";
import ShopBranchSection from "@/components/features/order/components/create-order/components/shop-branch-section";
import React from "react";

const CreateOrder = () => {
  return (
    <div className="min-h-full space-y-2 flex flex-col justify-between bg-background">
      <div className="p-4 space-y-3">
        <ShopBranchSection />
        <PickupMethod />
      </div>

      <OrderSummary />
    </div>
  );
};

export default CreateOrder;
