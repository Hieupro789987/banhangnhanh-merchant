import { GetAllOrderStatusValueDocument } from "@/generated/graphql";
import { useQuery } from "@apollo/client/react";

interface UseOrderStatusValuesOptions {
  excludeValues?: string[];
  includeValues?: string[];
}

export const useOrderStatusValues = ({
  excludeValues = [],
  includeValues,
}: UseOrderStatusValuesOptions = {}) => {
  const { data, loading, error, refetch } = useQuery(
    GetAllOrderStatusValueDocument
  );

  const orderStatusValues = (data?.getAllOrderStatusValue || []).filter(
    (item) => {
      if (item?.value && includeValues && includeValues.length > 0) {
        return includeValues.includes(item?.value);
      }
      if (item?.value && excludeValues && excludeValues.length > 0) {
        return !excludeValues.includes(item.value);
      }
      return true;
    }
  );

  return {
    orderStatusValues,
    loading,
    error,
    refetch,
  };
};
