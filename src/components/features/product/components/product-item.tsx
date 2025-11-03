import { Product } from "@/generated/graphql";
import React, { FC } from "react";
import { Icon } from "zmp-ui";
import { Img } from "@/components/shared/common/img";
import { parseNumber } from "@/components/shared/utils/format";
import TransitionLink from "@/components/shared/common/transition-link";

interface ProductItemProps {
  product: Product | null;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const ProductItem: FC<ProductItemProps> = ({
  product,
  href = "",
  className = "",
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (!product) return null;

  const content = (
    <div className={`w-full ${className}`}>
      <div className={`overflow-hidden rounded-lg bg-neutral-50 h-32`}>
        <Img src={product.image} cover className="w-full h-full" />
      </div>

      <div className="flex flex-col flex-1 gap-y-2 justify-between mt-2">
        <div>
          <div className="line-clamp-2 text-sm text-title font-bold">
            {product.name}
          </div>
          <div className="line-clamp-2 mt-1 text-sm text-[#737a89] font-normal">
            {product.subtitle}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-title font-bold">
            <div>
              {parseNumber(
                (product?.basePrice || 0) +
                  (product?.isDisplayPriceWithCheapestAttribute
                    ? product?.totalCheapestAttributePrice || 0
                    : 0)
              )}
              đ
            </div>
            {!!product?.downPrice &&
              product?.downPrice > (product?.basePrice || 0) && (
                <span className="line-through text-xs text-[#9CA1A9]">
                  {parseNumber(product?.downPrice)}đ
                </span>
              )}
          </div>

          <Icon
            icon="zi-plus-circle"
            size={24}
            className="text-primary cursor-pointer"
          />
        </div>
      </div>
    </div>
  );

  return href ? (
    <TransitionLink to={href}>{content}</TransitionLink>
  ) : (
    <div onClick={handleClick} className="cursor-pointer">
      {content}
    </div>
  );
};
