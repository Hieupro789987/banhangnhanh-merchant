// components/features/product/components/product-topping.tsx
import React, { useState, useMemo, useEffect } from "react";
import {
  Product,
  ProductAttribute,
  ProductAttributeElement,
} from "@/generated/graphql";
import { OrderItemProductAttributeElementInput } from "@/generated/graphql";
import Checkbox from "@/components/shared/common/checkbox";
import Radio from "@/components/shared/common/radio";
import { parseNumber } from "@/components/shared/utils/format";
import { Img } from "@/components/shared/common/img";

interface ProductToppingProps {
  product: Product;
  onConfirm: (
    selectedAttributes: OrderItemProductAttributeElementInput[]
  ) => void;
  onClose: () => void;
  initialSelectedAttributes?: OrderItemProductAttributeElementInput[];
}

interface SelectedAttribute {
  productAttributeElementId: string;
  productAttributeId: string;
}

const ProductToppings: React.FC<ProductToppingProps> = ({
  product,
  onConfirm,
  onClose,
  initialSelectedAttributes = [],
}) => {
  const [selectedAttributes, setSelectedAttributes] = useState<
    SelectedAttribute[]
  >([]);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const findCheapestRequiredToppings = useMemo(() => {
    const cheapestToppings: SelectedAttribute[] = [];

    product.productAttributes?.forEach((attribute) => {
      if (!attribute?.id || !attribute.required || attribute.min === 0) return;

      const validElements =
        attribute.productAttributeElements?.filter(
          (element): element is ProductAttributeElement =>
            element !== null && element.id !== undefined
        ) || [];

      if (validElements.length === 0) return;

      const cheapestElement = validElements.reduce((cheapest, current) => {
        if (!cheapest) return current;
        return (current.price || 0) < (cheapest.price || 0)
          ? current
          : cheapest;
      });

      if (cheapestElement?.id) {
        cheapestToppings.push({
          productAttributeElementId: cheapestElement.id,
          productAttributeId: attribute.id,
        });
      }
    });

    return cheapestToppings;
  }, [product.productAttributes]);

  useEffect(() => {
    if (initialSelectedAttributes && initialSelectedAttributes.length > 0) {
      const initialAttributes: SelectedAttribute[] = [];

      initialSelectedAttributes.forEach((attr) => {
        if (attr?.productAttributeElementId) {
          const element = findAttributeElementById(
            attr.productAttributeElementId
          );
          if (element?.productAttributeId) {
            initialAttributes.push({
              productAttributeElementId: attr.productAttributeElementId,
              productAttributeId: element.productAttributeId,
            });
          }
        }
      });

      setSelectedAttributes(initialAttributes);
      setHasUserInteracted(true);
    } else if (
      !hasUserInteracted &&
      product.isDisplayPriceWithCheapestAttribute &&
      findCheapestRequiredToppings.length > 0
    ) {
      setSelectedAttributes(findCheapestRequiredToppings);
    }
  }, [
    initialSelectedAttributes,
    product.isDisplayPriceWithCheapestAttribute,
    findCheapestRequiredToppings,
    hasUserInteracted,
  ]);

  const findAttributeElementById = (
    id: string
  ): ProductAttributeElement | null => {
    if (!product.productAttributes || !id) return null;

    for (const attr of product.productAttributes) {
      if (!attr?.productAttributeElements) continue;

      for (const element of attr.productAttributeElements) {
        if (element?.id === id) {
          return element;
        }
      }
    }
    return null;
  };

  const productAttributes = useMemo(() => {
    return (
      product.productAttributes?.filter(
        (attr) =>
          attr &&
          attr.id &&
          attr.productAttributeElements &&
          attr.productAttributeElements.length > 0
      ) || []
    );
  }, [product.productAttributes]);

  const handleAttributeToggle = (
    attributeElement: ProductAttributeElement,
    productAttribute: ProductAttribute,
    multiple: boolean
  ) => {
    const elementId = attributeElement.id || "";
    const attributeId = productAttribute.id || "";

    if (!elementId || !attributeId) return;

    if (!hasUserInteracted) {
      setHasUserInteracted(true);
    }

    if (multiple) {
      const isSelected = selectedAttributes.some(
        (attr) => attr.productAttributeElementId === elementId
      );

      if (isSelected) {
        setSelectedAttributes((prev) =>
          prev.filter((attr) => attr.productAttributeElementId !== elementId)
        );
      } else {
        const currentAttributeCount = selectedAttributes.filter((attr) => {
          return attr.productAttributeId === attributeId;
        }).length;

        const max = productAttribute.max || 0;
        if (max === 0 || currentAttributeCount < max) {
          setSelectedAttributes((prev) => [
            ...prev,
            {
              productAttributeElementId: elementId,
              productAttributeId: attributeId,
            },
          ]);
        }
      }
    } else {
      const otherAttributes = selectedAttributes.filter((attr) => {
        return attr.productAttributeId !== attributeId;
      });

      setSelectedAttributes([
        ...otherAttributes,
        {
          productAttributeElementId: elementId,
          productAttributeId: attributeId,
        },
      ]);
    }
  };

  const isAttributeSelected = (attributeElementId: string): boolean => {
    if (!attributeElementId) return false;
    return selectedAttributes.some(
      (attr) => attr.productAttributeElementId === attributeElementId
    );
  };

  const getCurrentAttributeCount = (productAttributeId: string): number => {
    if (!productAttributeId) return 0;
    return selectedAttributes.filter(
      (attr) => attr.productAttributeId === productAttributeId
    ).length;
  };

  const calculateTotalPrice = () => {
    let total = product.basePrice || 0;

    selectedAttributes.forEach((selectedAttr) => {
      const attributeElement = findAttributeElementById(
        selectedAttr.productAttributeElementId
      );

      if (attributeElement?.price) {
        total += attributeElement.price;
      }
    });

    return parseNumber(total);
  };

  const calculateDisplayPrice = () => {
    if (product.isDisplayPriceWithCheapestAttribute) {
      return parseNumber(
        (product.basePrice || 0) + (product.totalCheapestAttributePrice || 0)
      );
    }

    return parseNumber(product.basePrice || 0);
  };

  const canConfirm = (): boolean => {
    return productAttributes.every((attribute) => {
      if (!attribute?.id) return true;

      const selectedCount = getCurrentAttributeCount(attribute.id);
      const min = attribute.min || 0;

      if (min > 0) {
        return selectedCount >= min;
      }

      return true;
    });
  };

  const handleConfirm = () => {
    const orderAttributes: OrderItemProductAttributeElementInput[] =
      selectedAttributes
        .filter((attr) => attr.productAttributeElementId)
        .map((attr) => ({
          productAttributeElementId: attr.productAttributeElementId,
        }));

    onConfirm(orderAttributes);
  };

  if (productAttributes.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <div className="flex-1 ">
        <div className="p-4">
          <div className="mb-6 p-4 bg-neutral-100 rounded-lg">
            <div className="flex gap-x-2">
              <div className="w-14 h-14 overflow-hidden border rounded-lg bg-neutral-100 border-neutral-100 min-w-14 min-h-14">
                <Img
                  className="object-cover w-full h-full"
                  src={product?.image}
                  alt={product?.image || "image"}
                />
              </div>
              <div>
                <div className="text-xs line-clamp-2 text-title font-bold">
                  {product.name || "Sản phẩm"}
                </div>
                <div className="text-xs text-[#CB3629] font-bold mt-4">
                  {parseNumber(product.basePrice)}đ
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {productAttributes.map((productAttribute, index) => {
              if (!productAttribute?.id) return null;

              const multiple =
                productAttribute.max === 0 || (productAttribute.max || 0) > 1;
              const currentCount = getCurrentAttributeCount(
                productAttribute.id
              );
              const maxCount =
                productAttribute.max === 0 ? Infinity : productAttribute.max;
              const minCount = productAttribute.min || 0;
              const isRequired = productAttribute.required || false;

              return (
                <div
                  key={productAttribute.id}
                  className="border-b border-neutral-200 last:border-b-0 pb-4"
                >
                  <div className="mb-3">
                    <div className="text-base font-bold mb-1">
                      {index + 1}. {productAttribute.name || "Tuỳ chọn"}
                      {isRequired && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </div>

                    <div className="text-xs text-subtitle">
                      {multiple ? (
                        <>
                          {productAttribute.max === 0
                            ? "Có thể chọn nhiều lựa chọn"
                            : `Chọn tối đa ${productAttribute.max} lựa chọn (${currentCount}/${maxCount})`}
                          {minCount > 0 && ` - Tối thiểu ${minCount} lựa chọn`}
                        </>
                      ) : (
                        <>
                          Chọn 1 lựa chọn
                          {minCount > 0 && " - Bắt buộc"}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {productAttribute.productAttributeElements?.map(
                      (element) => {
                        if (!element?.id) return null;

                        const isAutoSelected =
                          !hasUserInteracted &&
                          product.isDisplayPriceWithCheapestAttribute &&
                          findCheapestRequiredToppings.some(
                            (topping) =>
                              topping.productAttributeElementId === element.id
                          );

                        return (
                          <div
                            key={element.id}
                            className={`p-3 border rounded-lg transition-colors ${
                              isAttributeSelected(element.id)
                                ? "border-primary bg-blue-50"
                                : isAutoSelected
                                ? "border-green-500 bg-green-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            onClick={() =>
                              handleAttributeToggle(
                                element,
                                productAttribute,
                                multiple
                              )
                            }
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center flex-1">
                                {multiple ? (
                                  <Checkbox
                                    checked={isAttributeSelected(element.id)}
                                    onChange={() => {}}
                                  />
                                ) : (
                                  <Radio
                                    checked={isAttributeSelected(element.id)}
                                    onChange={() => {}}
                                  />
                                )}

                                <div className="ml-3 flex-1">
                                  <div className="text-base font-medium">
                                    {element.name || "Tuỳ chọn"}
                                  </div>
                                  {element.unit && (
                                    <div className="text-xs text-gray-500">
                                      {element.unit}
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="text-base font-medium text-primary">
                                +{parseNumber(element.price)}đ
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>

                  {minCount > 0 && currentCount < minCount && (
                    <div className="text-xs text-red-500 mt-2">
                      Vui lòng chọn ít nhất {minCount} lựa chọn
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white shadow-card">
        <button
          className={`w-full py-3 rounded-lg font-medium text-center ${
            canConfirm()
              ? "bg-primary text-white"
              : "bg-neutral-200 text-gray-400 cursor-not-allowed"
          }`}
          onClick={handleConfirm}
          disabled={!canConfirm()}
        >
          Xác nhận +{calculateTotalPrice()}đ
        </button>

        {!canConfirm() && (
          <div className="text-xs text-red-500 mt-2 text-center">
            Vui lòng chọn đủ các tuỳ chọn bắt buộc
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductToppings;
