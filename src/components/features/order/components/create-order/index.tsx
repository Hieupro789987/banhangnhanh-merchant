import BuyerInformation from "@/components/features/order/components/create-order/components/buyer-information";
import OrderNote from "@/components/features/order/components/create-order/components/order-note";
import OrderPaymentMethod from "@/components/features/order/components/create-order/components/order-payment-method";
import OrderProducts from "@/components/features/order/components/create-order/components/order-products";
import OrderSummary from "@/components/features/order/components/create-order/components/order-summary";
import PickupMethod from "@/components/features/order/components/create-order/components/pickupMethod";
import ReceiverInformation from "@/components/features/order/components/create-order/components/receiver-information";
import ShopBranchSection from "@/components/features/order/components/create-order/components/shop-branch-section";
import React from "react";
const CreateOrder = () => {
  return (
    <div className="min-h-full space-y-2 flex flex-col justify-between bg-background">
      <div className="p-4 space-y-3">
        <ShopBranchSection />
        <PickupMethod />
        <BuyerInformation />
        <OrderProducts />
        <OrderNote />
        <ReceiverInformation />

        <OrderPaymentMethod />
      </div>

      <OrderSummary />
    </div>
  );
};

export default CreateOrder;
