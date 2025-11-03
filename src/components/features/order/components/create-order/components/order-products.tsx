import Section from "@/components/shared/common/section";
import { PackageIcon } from "@/components/shared/common/vectors";
import React, { useMemo, useState } from "react";
import { EmptyList } from "@/components/shared/common/empty";
import { Button, Icon } from "zmp-ui";
import TransitionLink from "@/components/shared/common/transition-link";
import { useOrder } from "@/components/features/order/provider/order-provider";
import {
  OrderItem,
  OrderItemProductAttributeElementInput,
  Product,
} from "@/generated/graphql";
import { OrderProductItem } from "@/components/features/order/components/create-order/components/order-product-item";
import ProductToppingsBSheet from "@/components/features/product/components/product-toppings/product-toppings-bSheet";
import { useProductWithToppings } from "@/components/shared/hooks/use-product";
import ProductNoteBSheet from "@/components/features/product/components/product-toppings/product-note-bSheet";

const OrderProducts = () => {
  const {
    state,
    updateOrderInput,
    updateProduct,
    removeOrderItem,
    updateProductToppings,
  } = useOrder();
  const [orderItemNote, setOrderItemNote] = useState<OrderItem | null>(null);
  const [updateProductTopping, setUpdateProductTopping] =
    useState<OrderItem | null>(null);

  const { product: productDetail } = useProductWithToppings(
    updateProductTopping?.productId || ""
  );

  const orderProducts: OrderItem[] = useMemo(() => {
    const items = state.draftOrder?.order?.items;
    if (items?.length) {
      return items.filter((item): item is OrderItem => item != null);
    }
    return [];
  }, [state.draftOrder?.order?.items]);

  const handleToppingConfirm = (
    selectedAttributes: OrderItemProductAttributeElementInput[]
  ) => {
    if (!updateProductTopping?.id) return;

    const productAttributeElements = selectedAttributes.map((attr) => ({
      productAttributeElementId: attr.productAttributeElementId,
      productAttributeElementName: "",
      productAttributeElementPrice: 0,
      productAttributeElementCode: "",
      productAttributeElementUnit: "",
      productAttributeId: "",
      productAttributeName: "",
      productAttributeCode: "",
      productId: updateProductTopping.productId || "",
    }));

    updateProductToppings(updateProductTopping.id, productAttributeElements);
    setUpdateProductTopping(null);
  };

  return (
    <div className="bg-white p-4 shadow-card rounded-lg">
      <Section
        // prefix={<PackageIcon />}
        title={`Đơn hàng của bạn (${orderProducts?.length})`}
        className="space-y-3"
      >
        {!!orderProducts?.length ? (
          <div className="pt-3 space-y-6">
            {orderProducts?.map((item, i) => (
              <OrderProductItem
                className="border-b border-b-neutral-100 last:border-b-0 pb-3 last:pb-0"
                isLoading={state.loading}
                key={`${item}-${i}`}
                orderItem={item}
                onEditToppings={() => {
                  setUpdateProductTopping(item);
                }}
                onEditNote={() => {
                  setOrderItemNote(item);
                }}
                onRemove={() => {
                  if (item.id) {
                    removeOrderItem(item.id);
                  }
                }}
                onQuantity={(value) => {
                  if (orderProducts[i].qty) {
                    orderProducts[i].qty += value;
                    updateProduct(orderProducts[i]);
                  }
                }}
              />
            ))}
          </div>
        ) : (
          <EmptyList content="Vui lòng thêm sản phẩm" />
        )}

        <TransitionLink
          to="add-products"
          className="flex active:bg-primary-light border text-sm items-center gap-x-1 border-primary max-w-fit text-primary rounded-lg px-3 py-2"
        >
          <Icon icon="zi-plus" size={16} />
          <span>Thêm</span>
        </TransitionLink>
      </Section>

      <ProductToppingsBSheet
        isOpen={updateProductTopping !== null}
        onClose={() => setUpdateProductTopping(null)}
        product={productDetail as Product}
        onConfirm={handleToppingConfirm}
        initialSelectedAttributes={updateProductTopping?.productAttributeElements
          ?.filter(Boolean)
          .map((x) => ({
            productAttributeElementId: x?.productAttributeElementId as string,
          }))}
        title={`Chỉnh sửa ${productDetail?.name || "sản phẩm"}`}
      />

      <ProductNoteBSheet
        isOpen={orderItemNote !== null}
        onClose={() => setOrderItemNote(null)}
        noteValue={orderItemNote?.note || ""}
        onConfirm={(val) => {
          const orderItemIndex = orderProducts.findIndex(
            (x) => x.id === orderItemNote?.id
          );

          if (orderItemIndex > -1) {
            orderProducts[orderItemIndex].note = val;
            updateProduct(orderProducts[orderItemIndex]);
          }
        }}
      />
    </div>
  );
};

export default OrderProducts;
