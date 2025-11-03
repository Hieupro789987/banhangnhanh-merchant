import { useQuery } from "@apollo/client/react";
import {
  GetAllPaymentMethodDocument,
  PaymentMethodData,
} from "@/generated/graphql";

export function usePaymentMethods(shopBranchId?: string, skip?: boolean) {
  const { data, loading, error } = useQuery(GetAllPaymentMethodDocument, {
    variables: { shopBranchId },
    skip,
  });

  const paymentMethods = data?.getAllPaymentMethod || [];

  return {
    paymentMethods,
    loading,
    error,
  };
}
