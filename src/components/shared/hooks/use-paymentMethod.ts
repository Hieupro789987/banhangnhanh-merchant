import { useQuery } from "@apollo/client/react";
import {
  GetAllPaymentMethodDocument,
  PaymentMethodData,
} from "@/generated/graphql";

export function usePaymentMethods(shopBranchId?: string) {
  const { data, loading, error } = useQuery(GetAllPaymentMethodDocument, {
    variables: { shopBranchId },
  });

  const paymentMethods = data?.getAllPaymentMethod || [];

  return {
    paymentMethods,
    loading,
    error,
  };
}
