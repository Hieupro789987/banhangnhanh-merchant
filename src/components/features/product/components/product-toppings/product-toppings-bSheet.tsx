// components/features/product/components/product-toppings-bsheet.tsx
import BottomSheet from "@/components/shared/common/bottom-sheet";

import React from "react";
import { Product } from "@/generated/graphql";
import { OrderItemProductAttributeElementInput } from "@/generated/graphql";
import ProductToppings from "@/components/features/product/components/product-toppings/product-toppings";

interface ProductToppingsBSheetProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
  onConfirm: (
    selectedAttributes: OrderItemProductAttributeElementInput[]
  ) => void;
  initialSelectedAttributes?: OrderItemProductAttributeElementInput[];
  title?: string;
}

const ProductToppingsBSheet: React.FC<ProductToppingsBSheetProps> = ({
  isOpen,
  onClose,
  product,
  onConfirm,
  initialSelectedAttributes = [],
  title = "Tuỳ chọn topping",
}) => {
  const handleToppingConfirm = (
    selectedAttributes: OrderItemProductAttributeElementInput[]
  ) => {
    onConfirm(selectedAttributes);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <BottomSheet
      visible={isOpen}
      onClose={handleClose}
      title={title}
      height="80vh"
    >
      {product && (
        <ProductToppings
          product={product}
          onConfirm={handleToppingConfirm}
          onClose={handleClose}
          initialSelectedAttributes={initialSelectedAttributes}
        />
      )}
    </BottomSheet>
  );
};

export default ProductToppingsBSheet;
