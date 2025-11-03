import { OrderQuantityButton } from "@/components/features/order/components/create-order/components/order-quantity-button";
import { Img } from "@/components/shared/common/img";
import { parseNumber } from "@/components/shared/utils/format";
import { displayAttributes } from "@/components/shared/utils/product";
import {
  OrderItem,
  OrderItemProductAttributeElement,
  Product,
} from "@/generated/graphql";
import React from "react";
import { Icon } from "zmp-ui";

import useAlert from "@/components/shared/hooks/use-alert";
import { RiEditLine } from "react-icons/ri";

export function OrderProductItem({
  orderItem,
  isShowValueAddedTax = false,
  className = "",
  onQuantity,
  isLoading = false,
  ...props
}: {
  isShowValueAddedTax?: boolean;
  orderItem: OrderItem;
  className?: string;
  isLoading?: boolean;
  onEditToppings?: (orderItem: OrderItem) => void;
  onRemove?: (orderItem: OrderItem) => void;
  onQuantity?: (quantity: number) => void;
  onEditNote?: (orderItem: OrderItem) => void;
}) {
  const alert = useAlert();
  if (!orderItem) return null;

  const totalTaxAmount =
    (orderItem?.basePrice || 0) * ((orderItem.valueAddedTaxRate || 0) / 100);
  const totalAmount =
    (orderItem?.basePrice || 0) + (isShowValueAddedTax ? totalTaxAmount : 0);

  const handleRemove = async () => {
    if (isLoading) return;

    alert.confirm(
      "Bạn có chắc chắn muốn xóa sản phẩm này?",
      () => props.onRemove?.(orderItem),
      "Xóa",
      "Hủy",
      "danger",
      { position: "top-center" }
    );
  };

  return (
    <div
      className={`flex items-start ${className} ${
        isLoading ? "pointer-events-none opacity-50" : ""
      }`}
    >
      <div className="w-14 h-14 overflow-hidden border rounded-lg bg-neutral-100 border-neutral-100 min-w-14 min-h-14">
        <Img
          className="object-cover w-full h-full"
          src={orderItem?.product?.image}
          alt={orderItem?.product?.image || "image"}
        />
      </div>
      <div className="flex-1 ml-3 flex flex-col">
        <div className="flex justify-between">
          <div className="text-xs line-clamp-2 w-4/5 text-title font-bold">
            {orderItem?.productName}
          </div>
          {props.onRemove && (
            <button
              onClick={handleRemove}
              disabled={isLoading}
              className="text-white max-h-fit bg-red-600 flex items-center justify-center rounded p-1 disabled:opacity-50"
            >
              <Icon icon="zi-delete" size={16} />
            </button>
          )}
        </div>

        {orderItem && (
          <>
            {!!orderItem.productAttributeElements?.length && (
              <>
                <div className="mt-2 items-center  text-xs text-subtitle flex gap-x-1">
                  {displayAttributes(
                    orderItem.productAttributeElements.filter(
                      Boolean
                    ) as OrderItemProductAttributeElement[]
                  )}
                  <i
                    className="text-primary text-xs font-bold"
                    onClick={() =>
                      !isLoading && props.onEditToppings?.(orderItem)
                    }
                  >
                    <RiEditLine size={16} />
                  </i>
                </div>
              </>
            )}
            {props.onEditNote && (
              <div
                className={`mt-1 text-xs text-subtitle flex gap-x-2 items-center`}
              >
                Ghi chú: {orderItem.note}
                <i
                  className="text-primary text-xs font-bold"
                  onClick={() => !isLoading && props.onEditNote?.(orderItem)}
                >
                  <RiEditLine size={16} />
                </i>
              </div>
            )}
          </>
        )}

        {isShowValueAddedTax && (
          <div className="text-[11px] mt-1 px-1.5 py-0.5 flex justify-between bg-neutral-100 rounded-lg">
            GTGT ({parseNumber(orderItem.valueAddedTaxRate)}%):{" "}
            <strong className="text-right">
              {parseNumber(totalTaxAmount)}đ
            </strong>
          </div>
        )}

        <div className="w-full mt-4 flex justify-between items-center">
          <div className=" text-xs text-[#CB3629] font-bold">
            {parseNumber(totalAmount)}đ
          </div>

          {onQuantity && (
            <OrderQuantityButton
              value={orderItem.qty || 0}
              onChange={(val) => {
                onQuantity?.(val);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
