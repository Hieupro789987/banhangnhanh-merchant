import { useOrder } from "@/components/features/order/provider/order-provider";
import { useShopConfig } from "@/components/features/shop-config/provider/shop-config-provider";
import RowText from "@/components/shared/common/row-text";
import Section from "@/components/shared/common/section";
import { parseNumber } from "@/components/shared/utils/format";
import React from "react";
import { RiInformationFill } from "react-icons/ri";

const OrderSummary = () => {
  const { shopConfig } = useShopConfig();
  const { state } = useOrder();
  const order = state.draftOrder?.order;
  return (
    <div className="rounded-lg bg-white shadow-card">
      <Section
        title="Thông tin tạm tính"
        className="p-4"
        prefix={<RiInformationFill size={24} color="#4C76B1" />}
      >
        <div className="mt-3 space-y-3">
          <RowText
            titleClassName="w-2/3"
            title={`Tạm tính (${parseNumber(order?.itemCount)} sản phẩm)`}
            content={`${parseNumber(order?.originSubTotal)}đ`}
          />
          {!!order?.hasValueAddedTax &&
            shopConfig?.valueAddedTaxConfig?.isActivated && (
              <RowText
                title="Tổng thuế"
                content={`${parseNumber(order?.valueAddedTaxAmount)}đ`}
              />
            )}
          {/* {order?.customerShipMethod &&
            order?.customerShipServiceName && (
              <RowText
                titleClassName="w-[55%]"
                title="Phương thức vận chuyển"
                content={getShipMethodLabel(
                  order?.customerShipMethod,
                  order?.customerShipServiceName,
                  order?.customerShipDeliveryName
                )}
              />
            )} */}
          {order?.pickupMethod === "DELIVERY" && (
            <RowText
              titleClassName="w-2/3"
              // title={`Phí giao hàng ${
              //   order?.shipDistance
              //     ? `(${order?.shipDistance} km)`
              //     : ""
              // }`}
              title="Phí giao hàng"
              content={`${parseNumber(order?.shipfee)}đ`}
            />
          )}
          {order?.items?.some(
            (x) => x?.product?.productPricePolicy?.isActive
          ) &&
            !!order?.productPricePolicyDiscount && (
              <RowText
                title="Chiết khấu"
                content={`-${parseNumber(order?.productPricePolicyDiscount)}đ`}
              />
            )}

          {!!order?.rewardPointDiscount && (
            <RowText
              title="Giảm giá điểm thưởng"
              content={`-${parseNumber(order?.rewardPointDiscount)}đ`}
            />
          )}
          {!!order?.discount && (
            <RowText
              title={
                (
                  <div>
                    <div className="text-sm">Khuyến mãi</div>
                    {order?.voucher?.code && (
                      <span className="text-primary">
                        ( {order?.voucher?.code} )
                      </span>
                    )}
                  </div>
                ) as unknown as string
              }
              content={`-${parseNumber(order?.discount)}đ`}
            />
          )}
        </div>
      </Section>
    </div>
  );
};

export default OrderSummary;
