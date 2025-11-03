import { OrderItemProductAttributeElement } from "@/generated/graphql";

export const displayAttributes = (
  productAttributeElements: OrderItemProductAttributeElement[]
) => {
  if (!productAttributeElements?.length) return;

  let displaySelectedAttribute = [...productAttributeElements]
    .map(
      (attribute) =>
        `${attribute?.productAttributeName}: ${attribute?.productAttributeElementName}`
    )
    .join(", ");

  return displaySelectedAttribute;
};
