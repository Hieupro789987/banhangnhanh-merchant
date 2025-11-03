// hooks/use-products.ts
import { useQuery } from "@apollo/client/react";
import { useCallback, useMemo } from "react";
import {
  GetAllProductDocument,
  GetAllProductQuery,
  GetAllProductQueryVariables,
  GetOneProductDocument,
  GetOneProductToppingDocument,
} from "@/generated/graphql";

interface UseProductsParams {
  search?: string;
  categoryIds?: string[];
  limit?: number;
  page?: number;
  order?: Record<string, any>;
  enabled?: boolean;
}

export const useProducts = (params: UseProductsParams = {}) => {
  const {
    search = "",
    categoryIds = [],
    limit = 20,
    page = 1,
    order = { createdAt: -1 },
    enabled = true,
  } = params;

  const variables = useMemo((): GetAllProductQueryVariables => {
    const filter: any = {};
    if (categoryIds.length > 0) filter.categoryIds = categoryIds;

    return {
      q: {
        filter: Object.keys(filter).length > 0 ? filter : undefined,
        limit,
        page,
        order,
        search,
      },
    };
  }, [search, categoryIds, limit, page, order]);

  const { data, loading, error, refetch, fetchMore } = useQuery(
    GetAllProductDocument,
    {
      variables,
      skip: !enabled,
      notifyOnNetworkStatusChange: true,
    }
  );

  const products = useMemo(() => data?.getAllProduct?.data || [], [data]);
  const pagination = useMemo(() => data?.getAllProduct?.pagination, [data]);
  const total = useMemo(() => data?.getAllProduct?.total || 0, [data]);

  const hasMore = useMemo(() => {
    if (!pagination) return false;
    return (pagination.page || 1) * pagination.limit < total;
  }, [pagination, total]);

  const loadMore = useCallback(async () => {
    if (!hasMore || loading) return;

    const nextPage = (pagination?.page || 1) + 1;

    await fetchMore({
      variables: {
        q: {
          ...variables.q,
          page: nextPage,
        },
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        return {
          getAllProduct: {
            ...fetchMoreResult.getAllProduct,
            data: [
              ...(prev.getAllProduct?.data || []),
              ...(fetchMoreResult.getAllProduct?.data || []),
            ],
          },
        };
      },
    });
  }, [fetchMore, hasMore, loading, pagination, variables.q]);

  const searchProducts = useCallback(
    (searchTerm: string) => {
      refetch({
        q: {
          ...variables.q,
          search: searchTerm || undefined,
          page: 1,
        },
      });
    },
    [refetch, variables.q]
  );

  return {
    // Data
    products,
    pagination,
    total,

    // State
    loading,
    error,

    // Pagination
    hasMore,
    loadMore,

    // Actions
    refetch,
    searchProducts,
  };
};

export const useProduct = (productId?: string) => {
  const { data, loading, error } = useQuery(GetOneProductDocument, {
    variables: { getOneProductId: productId! },
    skip: !productId,
  });

  return {
    product: data?.getOneProduct,
    loading,
    error,
  };
};

export const useProductWithToppings = (productId?: string) => {
  const { data, loading, error } = useQuery(GetOneProductToppingDocument, {
    variables: { getOneProductId: productId! },
    skip: !productId,
  });

  return {
    product: data?.getOneProduct,
    loading,
    error,
  };
};
