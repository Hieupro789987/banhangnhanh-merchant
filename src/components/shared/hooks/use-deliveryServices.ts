import { useLazyQuery, useMutation } from "@apollo/client/react";
import {
  GetAllDeliveryServiceAvailableDocument,
  DeliveryService,
  GetAllDeliveryServiceAvailableInput,
} from "@/generated/graphql";

export function useDeliveryServices() {
  const [getDeliveryServices, { data, loading, error }] = useMutation(
    GetAllDeliveryServiceAvailableDocument
  );

  const fetchDeliveryServices = (
    input: GetAllDeliveryServiceAvailableInput
  ) => {
    return getDeliveryServices({
      variables: {
        data: input,
      },
    });
  };

  const deliveryServices = data?.getAllDeliveryServiceAvailable || [];

  return {
    deliveryServices,
    loading,
    error,
    fetchDeliveryServices,
  };
}
