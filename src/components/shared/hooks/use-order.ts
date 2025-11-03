import { useQuery } from "@apollo/client/react";
import { useCallback, useMemo } from "react";
import {
  GetAllOrderDocument,
  GetAllOrderQuery,
  GetAllOrderQueryVariables,
  GetOneOrderDocument,
  GetAllOrder2Document,
  GetAllOrder2Query,
  GetAllOrder2QueryVariables,
} from "@/generated/graphql";

interface UseOrdersParams {
  search?: string;
  status?: string[];
  limit?: number;
  page?: number;
  order?: Record<string, any>;
  enabled?: boolean;
}

export const useOrders = (params: UseOrdersParams = {}) => {
  const {
    search = "",
    status = [],
    limit = 20,
    page = 1,
    order = { createdAt: -1 },
    enabled = true,
  } = params;

  const variables = useMemo((): GetAllOrderQueryVariables => {
    const filter: any = {};
    if (status.length > 0) filter.status = status;

    return {
      q: {
        filter: Object.keys(filter).length > 0 ? filter : undefined,
        limit,
        page,
        order,
        search,
      },
    };
  }, [search, status, limit, page, order]);

  const { data, loading, error, refetch, fetchMore } = useQuery(
    GetAllOrderDocument,
    {
      variables,
      skip: !enabled,
    }
  );

  const orders = useMemo(() => data?.getAllOrder?.data || [], [data]);
  const pagination = useMemo(() => data?.getAllOrder?.pagination, [data]);
  const total = useMemo(() => data?.getAllOrder?.total || 0, [data]);

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
          getAllOrder: {
            ...fetchMoreResult.getAllOrder,
            data: [
              ...(prev.getAllOrder?.data || []),
              ...(fetchMoreResult.getAllOrder?.data || []),
            ],
          },
        };
      },
    });
  }, [fetchMore, hasMore, loading, pagination, variables.q]);

  const searchOrders = useCallback(
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

  const filterByStatus = useCallback(
    (statuses: string[]) => {
      refetch({
        q: {
          ...variables.q,
          filter: statuses.length > 0 ? { status: statuses } : undefined,
          page: 1,
        },
      });
    },
    [refetch, variables.q]
  );

  return {
    // Data
    orders,
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
    searchOrders,
    filterByStatus,
  };
};

export const useOrder = (orderId?: string) => {
  const { data, loading, error } = useQuery(GetOneOrderDocument, {
    variables: { getOneOrderId: orderId! },
    skip: !orderId,
  });

  return {
    order: data?.getOneOrder,
    loading,
    error,
  };
};

export const useSimpleOrders = (params: UseOrdersParams = {}) => {
  const {
    search = "",
    status = [],
    limit = 20,
    page = 1,
    order = { createdAt: -1 },
    enabled = true,
  } = params;

  const variables = useMemo((): GetAllOrder2QueryVariables => {
    const filter: any = {};
    if (status.length > 0) filter.status = status;

    return {
      q: {
        filter: Object.keys(filter).length > 0 ? filter : undefined,
        limit,
        page,
        order,
        search,
      },
    };
  }, [search, status, limit, page, order]);

  const { data, loading, error, refetch, fetchMore } = useQuery(
    GetAllOrder2Document,
    {
      variables,
      skip: !enabled,
      fetchPolicy: "network-only",
    }
  );

  const orders = useMemo(() => data?.getAllOrder?.data || [], [data]);
  const pagination = useMemo(() => data?.getAllOrder?.pagination, [data]);
  const total = useMemo(() => data?.getAllOrder?.total || 0, [data]);

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
          getAllOrder: {
            ...fetchMoreResult.getAllOrder,
            data: [
              ...(prev.getAllOrder?.data || []),
              ...(fetchMoreResult.getAllOrder?.data || []),
            ],
          },
        };
      },
    });
  }, [fetchMore, hasMore, loading, pagination, variables.q]);

  return {
    // Data
    orders,
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
  };
};
