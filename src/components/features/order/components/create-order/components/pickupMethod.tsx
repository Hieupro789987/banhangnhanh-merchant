import React, { useEffect, useMemo } from "react";
import deliveryICon from "@/static/delivery.png";
import storeICon from "@/static/store.png";
import cashierMachineIcon from "@/static/cashier-machine.png";
import { Option } from "@/types";
import Section from "@/components/shared/common/section";
import { Img } from "@/components/shared/common/img";
import { useOrder } from "@/components/features/order/provider/order-provider";
import { useAuth } from "@/components/features/auth/provider/auth-provider";
import { EPickupMethod, EShopType } from "@/generated/graphql";
import { useShopConfig } from "@/components/features/shop-config/provider/shop-config-provider";

const PICK_METHOD_TAB_OPTIONS: Option[] = [
  { label: "Giao hàng", value: EPickupMethod.DELIVERY, image: deliveryICon },
  { label: "Nhận tại cửa hàng", value: EPickupMethod.STORE, image: storeICon },
  {
    label: "Bán tại quầy",
    value: EPickupMethod.IN_STORE_PURCHASE,
    image: cashierMachineIcon,
  },
];
const PickupMethod = () => {
  const { member, staff } = useAuth();
  const { shopConfig } = useShopConfig();
  const isDelivery = shopConfig.orderConfig?.deliveryConfig?.isActivated;
  const isShowStorePurchase = [
    member?.shopType,
    staff?.member?.shopType,
  ].includes(EShopType.FOOD_AND_BEVERAGE_DEPARTMENT);

  const { updateOrderInput, state } = useOrder();

  const pickupMethods = useMemo(() => {
    return PICK_METHOD_TAB_OPTIONS.filter((x) => {
      if (x.value === EPickupMethod.DELIVERY && !isDelivery) {
        return false;
      }

      if (x.value === EPickupMethod.IN_STORE_PURCHASE && !isShowStorePurchase) {
        return false;
      }

      return true;
    });
  }, [isDelivery, isShowStorePurchase]);

  const gridClass = useMemo(() => {
    const count = pickupMethods.length;
    if (count === 1) return "grid-cols-1";
    if (count === 2) return "grid-cols-2";
    if (count === 3) return "grid-cols-3";
    return "grid-cols-1";
  }, [pickupMethods.length]);

  useEffect(() => {
    if (pickupMethods?.length === 1) {
      updateOrderInput({ pickupMethod: pickupMethods[0].value });
    }
  }, [pickupMethods]);

  return (
    <div className="rounded-lg bg-white shadow-card">
      <Section title="Hình thức nhận hàng" className="p-4">
        <div className={`grid ${gridClass} gap-x-2 gap-y-3 mt-3`}>
          {pickupMethods.map((tab) => (
            <div
              key={tab.value}
              className={`rounded-lg border flex flex-col justify-center border-neutral-200 p-4
                ${
                  state.orderDataInput.pickupMethod === tab.value
                    ? "border-primary text-primary"
                    : "text-subtitle"
                }`}
              onClick={() => updateOrderInput({ pickupMethod: tab.value })}
            >
              <div className="h-14 w-14 m-auto">
                <Img src={tab.image} alt={tab.image} />
              </div>
              <span className=" min-h-9 text-xs text-center">{tab.label}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default PickupMethod;
