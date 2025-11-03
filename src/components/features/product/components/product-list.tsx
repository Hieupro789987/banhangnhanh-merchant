import { useOrder } from "@/components/features/order/provider/order-provider";
import { ProductItem } from "@/components/features/product/components/product-item";
import InputWithComponents from "@/components/shared/common/input";
import { useProducts } from "@/components/shared/hooks/use-product";
import { useInfiniteScroll } from "@/components/shared/hooks/useInfiniteScroll";
import { OrderItemInput, Product } from "@/generated/graphql";
import { useRef, useEffect, useState } from "react";
import { Spinner } from "zmp-ui";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useProductWithToppings } from "@/components/shared/hooks/use-product";
import { OrderItemProductAttributeElementInput } from "@/generated/graphql";
import ProductToppingsBSheet from "@/components/features/product/components/product-toppings/product-toppings-bSheet";

const ProductList = () => {
  const navigate = useNavigate();
  const { updateOrderInput, state } = useOrder();
  const { products, loading, error, hasMore, loadMore, searchProducts } =
    useProducts({
      search: "",
      categoryIds: [],
      limit: 10,
      page: 1,
      enabled: true,
    });

  const [showToppingSheet, setShowToppingSheet] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const { product: productDetail, loading: loadingProductDetail } =
    useProductWithToppings(selectedProductId || "");

  const { loaderRef, isInitialLoad, completeInitialLoad } = useInfiniteScroll({
    hasMore,
    loading,
    onLoadMore: loadMore,
    threshold: 0.1,
    enabled: true,
  });

  const addProductWithoutTopping = (product: Product) => {
    const orderItem: OrderItemInput = {
      quantity: 1,
      productId: product.id || "",
      productName: product.name || "",
      productImageUrl: product.image || "",
      note: "",
      basePrice: product.basePrice || 0,
    };

    updateOrderInput({
      items: [...(state.orderDataInput?.items || []), orderItem],
    });
    navigate(-1);
  };

  const handleProductClick = (product: Product) => {
    const hasToppings =
      product.productAttributes && product.productAttributes.length > 0;

    if (hasToppings) {
      setSelectedProductId(product.id || "");
      setShowToppingSheet(true);
    } else {
      addProductWithoutTopping(product);
    }
  };

  const handleToppingConfirm = (
    selectedAttributes: OrderItemProductAttributeElementInput[]
  ) => {
    if (!productDetail) return;

    const orderItem: OrderItemInput = {
      quantity: 1,
      productId: productDetail.id || "",
      productName: productDetail.name || "",
      productImageUrl: productDetail.image || "",
      note: "",
      basePrice: productDetail.basePrice || 0,
      productAttributeElements: selectedAttributes,
    };

    updateOrderInput({
      items: [...(state.orderDataInput?.items || []), orderItem],
    });
    handleCloseToppingSheet();
    navigate(-1);
  };

  const handleCloseToppingSheet = () => {
    setShowToppingSheet(false);
    setSelectedProductId(null);
  };

  useEffect(() => {
    if (products.length > 0) {
      completeInitialLoad();
    }
  }, [products, completeInitialLoad]);

  return (
    <div className="bg-white">
      <div className="p-4 bg-white sticky top-0 left-0 z-10">
        <InputWithComponents.Search
          loading={loading}
          className="text-sm placeholder:text-sm h-10"
          debounce={500}
          placeholder="Tìm kiếm sản phẩm..."
          onChange={(value) => searchProducts(value)}
        />
      </div>

      <div className="px-4">
        {isInitialLoad && loading && (
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mt-4">
          {products.map((product) => (
            <ProductItem
              key={product?.id}
              product={product}
              onClick={() => {
                if (product) {
                  handleProductClick(product);
                }
              }}
            />
          ))}
        </div>

        <div ref={loaderRef} className="py-4">
          {loading && !isInitialLoad && (
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          )}
          {!hasMore && products.length > 0 && (
            <div className="text-center text-subtitle">
              Đã hiển thị tất cả sản phẩm
            </div>
          )}
        </div>

        {!loading && products.length === 0 && (
          <div className="text-center py-8 text-subtitle">
            Không tìm thấy sản phẩm nào
          </div>
        )}
      </div>

      {productDetail && (
        <ProductToppingsBSheet
          isOpen={showToppingSheet}
          onClose={handleCloseToppingSheet}
          product={productDetail as Product}
          onConfirm={handleToppingConfirm}
          title={`Tuỳ chọn`}
        />
      )}
    </div>
  );
};

export default ProductList;
