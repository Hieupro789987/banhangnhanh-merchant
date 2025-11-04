import {
  convertOrderItemToOrderItemInput,
  useOrder,
} from "@/components/features/order/provider/order-provider";
import { useShopConfig } from "@/components/features/shop-config/provider/shop-config-provider";
import BottomSheet from "@/components/shared/common/bottom-sheet";
import { Img } from "@/components/shared/common/img";
import Section from "@/components/shared/common/section";
import { useDeliveryServices } from "@/components/shared/hooks/use-deliveryServices";
import { getShipMethodLabel } from "@/components/shared/utils/delivery";
import { parseNumber } from "@/components/shared/utils/format";
import {
  GetAllDeliveryServiceAvailableInput,
  OrderItem,
} from "@/generated/graphql";
import React, { useEffect, useState } from "react";
import { RiEditFill, RiTruckFill } from "react-icons/ri";
import { Icon } from "zmp-ui";

const OrderDeliveryService = () => {
  const { state, updateOrderInput } = useOrder();
  const { shopConfig } = useShopConfig();
  const { fetchDeliveryServices, deliveryServices, loading } =
    useDeliveryServices();
  const [visible, setVisible] = useState(false);

  // const orderDataInput = state?.orderDataInput;
  const draftOrder = state?.draftOrder;

  const isAdministrativeAddressConfig =
    shopConfig?.orderConfig?.deliveryConfig?.deliveryAddressConfig
      ?.administrativeAddressConfig?.isActivated;
  const isCoordinateBasedAddressConfig =
    shopConfig?.orderConfig?.deliveryConfig?.deliveryAddressConfig
      ?.coordinateBasedAddressConfig?.isActivated;
  const allowDelivery = shopConfig?.orderConfig?.allowDelivery;

  useEffect(() => {
    if (
      !allowDelivery ||
      draftOrder?.order?.pickupMethod === "STORE" ||
      !draftOrder?.order?.shopBranchId
    ) {
      return;
    }

    let hasValidAddress = true;
    if (isAdministrativeAddressConfig) {
      hasValidAddress =
        !!draftOrder?.order?.receiverProvinceId &&
        !!draftOrder?.order?.receiverDistrictId;
    } else if (isCoordinateBasedAddressConfig) {
      hasValidAddress =
        !!draftOrder?.order?.latitude && !!draftOrder?.order?.longitude;
    }

    if (!hasValidAddress || !draftOrder?.order?.items?.length) {
      return;
    }

    const input: GetAllDeliveryServiceAvailableInput = {
      items: draftOrder?.order?.items
        ?.filter((x): x is OrderItem => x != null)
        .map((item) => convertOrderItemToOrderItemInput(item)),
      shopBranchId: draftOrder?.order?.shopBranchId || "",
      latitude: draftOrder?.order?.latitude,
      longitude: draftOrder?.order?.longitude,
      provinceId: draftOrder?.order?.receiverProvinceId,
      districtId: draftOrder?.order?.receiverDistrictId,
      wardId: draftOrder?.order?.receiverWardId,
    };

    fetchDeliveryServices(input);
  }, [
    draftOrder?.order,
    allowDelivery,
    isAdministrativeAddressConfig,
    isCoordinateBasedAddressConfig,
  ]);

  const selectedDelivery = deliveryServices?.find(
    (service) =>
      // service?.serviceId === draftOrder?.order?.customerShipServiceId ||
      service?.shipMethod === draftOrder?.order?.customerShipMethod
  );

  if (
    !allowDelivery ||
    draftOrder?.order?.pickupMethod === "STORE" ||
    (!loading && !deliveryServices?.length)
  ) {
    return null;
  }

  return (
    <>
      <div className="bg-white p-4 shadow-card rounded-lg">
        <Section
          title="Hình thức giao hàng"
          prefix={<RiTruckFill size={24} color="#2CA3AD" />}
          suffix={
            <i className="text-primary" onClick={() => setVisible(true)}>
              <RiEditFill size={20} />
            </i>
          }
        >
          <div className="text-title text-sm mt-3">
            <>
              {!loading ? (
                <>
                  {selectedDelivery ? (
                    getShipMethodLabel(
                      selectedDelivery.shipMethod || "",
                      selectedDelivery.serviceName || "",
                      selectedDelivery.deliveryName || ""
                    )
                  ) : (
                    <span className="text-neutral-300">
                      Chọn phương thức vận chuyển
                    </span>
                  )}
                </>
              ) : (
                <div className="h-4.5 loading-ellipsis"></div>
              )}
            </>
          </div>
        </Section>
      </div>
      <BottomSheet
        visible={visible}
        onClose={() => setVisible(false)}
        height="80vh"
        title="Chọn hình thức giao hàng"
      >
        <div className="flex-1 overflow-y-auto px-4">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <div className="text-subtitle mt-2 text-sm">Đang tải...</div>
            </div>
          ) : deliveryServices && deliveryServices.length > 0 ? (
            <div className="space-y-3 py-2">
              {deliveryServices.map((service) => (
                <div
                  key={`${service?.serviceId}-${service?.shipMethod}`}
                  className={`
                    p-4 rounded-lg border  transition-all duration-200
                    ${
                      // draftOrder?.order?.customerShipServiceId ===
                      //   service?.serviceId &&
                      draftOrder?.order?.customerShipMethod ===
                      service?.shipMethod
                        ? "border-primary bg-blue-50 shadow-card"
                        : "border-neutral-200 bg-white"
                    }
                  `}
                  onClick={() => {
                    updateOrderInput({
                      customerShipMethod: service?.shipMethod,
                      customerShipServiceId: service?.serviceId,
                    });
                    setVisible(false);
                  }}
                >
                  <div className="flex justify-between gap-x-4 items-center">
                    <div className="flex flex-1 items-center">
                      {service?.iconUrl && (
                        <div className="border border-gray-200 rounded-lg p-2 flex items-center justify-center w-12 h-12 mr-3 bg-white">
                          <Img
                            src={service.iconUrl}
                            alt={service.deliveryName || ""}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                      )}
                      <div className="flex-1 flex flex-col">
                        <div className="font-semibold text-sm text-gray-900">
                          {service?.deliveryName || service?.shipMethod}
                        </div>
                        <div className="text-title text-[13px] mt-1">
                          {service?.serviceName}
                        </div>
                        {service?.duration && (
                          <div className="text-subtitle text-xs mt-1 flex items-center">
                            <span className="mr-1">⏱️</span>
                            {service.duration}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right min-w-[80px]">
                      {(service?.shipFee || 0) > 0 ? (
                        <div className="font-semibold text-sm text-gray-900">
                          {parseNumber(service?.shipFee)}đ
                        </div>
                      ) : (
                        <div className="font-semibold text-sm text-green-600">
                          Miễn phí
                        </div>
                      )}
                      {
                        // draftOrder?.order?.customerShipServiceId ===
                        //   service?.serviceId &&
                        draftOrder?.order?.customerShipMethod ===
                          service?.shipMethod && (
                          <div className="mt-1">
                            <div className="text-primary">
                              <Icon icon="zi-check-circle" />
                            </div>
                          </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-4xl mb-3">🚚</div>
              <div className="font-bold text-gray-700 text-sm mb-2">
                Không có phương thức vận chuyển
              </div>
              <div className="text-subtitle text-[13px]">
                Vui lòng kiểm tra lại thông tin địa chỉ giao hàng
              </div>
            </div>
          )}
        </div>
      </BottomSheet>
    </>
  );
};

export default OrderDeliveryService;
