import { useState, useEffect } from "react";
import {
  GetAllShopBranchDocument,
  type ShopBranch,
  type QueryGetListInput,
  EStaffPermissionScope,
} from "@/generated/graphql";
import { useAuth } from "@/components/features/auth/provider/auth-provider";
import { useQuery } from "@apollo/client/react";

interface UseShopBranchesProps {
  autoFetch?: boolean;
  queryParams?: QueryGetListInput;
}

export const useShopBranches = ({
  autoFetch = true,
  queryParams = {},
}: UseShopBranchesProps = {}) => {
  const { staff, member } = useAuth();
  console.log("staff: ", staff);

  const variables = {
    q: {
      limit: 100,
      offset: 0,
      ...queryParams,
    },

    staffPermissionScope: staff?.id
      ? EStaffPermissionScope.CREATE_ORDER
      : undefined,
  };

  const { data, loading, error, refetch } = useQuery(GetAllShopBranchDocument, {
    variables,
    skip: !autoFetch,
    fetchPolicy: "cache-first",
  });

  const [selectedBranch, setSelectedBranch] = useState<ShopBranch | null>(null);
  const [shopBranches, setShopBranches] = useState<ShopBranch[]>([]);

  useEffect(() => {
    if (data?.getAllShopBranch?.data) {
      const branches = data.getAllShopBranch.data as ShopBranch[];
      setShopBranches(branches);

      if (!selectedBranch && branches.length > 0) {
        setSelectedBranch(branches[0]);
      }
    }
  }, [data, selectedBranch]);

  const fetchShopBranches = async (customParams?: QueryGetListInput) => {
    const refetchVariables = customParams
      ? { ...variables, q: { ...variables.q, ...customParams } }
      : variables;

    return refetch(refetchVariables);
  };

  const selectBranchById = (branchId: string) => {
    const branch = shopBranches.find((b) => b.id === branchId);
    if (branch) {
      setSelectedBranch(branch);
    }
  };

  const selectBranchByCode = (branchCode: string) => {
    const branch = shopBranches.find((b) => b.code === branchCode);
    if (branch) {
      setSelectedBranch(branch);
    }
  };

  return {
    shopBranches,
    selectedBranch,
    setSelectedBranch,
    selectBranchById,
    selectBranchByCode,
    refetch: fetchShopBranches,
    loading,
    isLoading: loading && shopBranches.length === 0,
    isRefetching: loading && shopBranches.length > 0,
    error: error?.message || null,
    total: data?.getAllShopBranch?.total || 0,
    pagination: data?.getAllShopBranch?.pagination,
  };
};

export const useSelectedShopBranch = () => {
  const { selectedBranch, setSelectedBranch, shopBranches } = useShopBranches();

  return {
    selectedBranch,
    setSelectedBranch,
    availableBranches: shopBranches,
  };
};
