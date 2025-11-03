import BuyerInformation from "@/components/features/order/components/create-order/components/buyer-information";
import OrderDeliveryService from "@/components/features/order/components/create-order/components/order-delivery-service";
import OrderNote from "@/components/features/order/components/create-order/components/order-note";
import OrderPaymentMethod from "@/components/features/order/components/create-order/components/order-payment-method";
import OrderProducts from "@/components/features/order/components/create-order/components/order-products";
import OrderCheckout from "@/components/features/order/components/create-order/components/order-checkout";
import PickupMethod from "@/components/features/order/components/create-order/components/pickupMethod";
import ReceiverInformation from "@/components/features/order/components/create-order/components/receiver-information";
import ShopBranchSection from "@/components/features/order/components/create-order/components/shop-branch-section";
import { useOrder } from "@/components/features/order/provider/order-provider";
import React from "react";
import OrderSummary from "@/components/features/order/components/create-order/components/order-summary";
const CreateOrder = () => {
  const { state } = useOrder();
  const isStart = !state?.draftOrder;
  return (
    <div
      className={`min-h-full space-y-2 flex flex-col justify-between bg-background ${
        isStart ? "pointer-events-none touch-none opacity-50" : ""
      }`}
    >
      <div className="p-4 space-y-3">
        <ShopBranchSection />
        <PickupMethod />
        <BuyerInformation />
        <OrderProducts />
        <OrderNote />
        <ReceiverInformation />
        <OrderDeliveryService />

        <OrderPaymentMethod />
        <OrderSummary />
      </div>

      <OrderCheckout />
    </div>
  );
};

export default CreateOrder;
