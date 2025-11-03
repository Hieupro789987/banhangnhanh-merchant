import { AddressGroup } from "@/components/features/address/components/address-group";
import { OrderStoreTime } from "@/components/features/order/components/create-order/components/order-store-time";
import { useOrder } from "@/components/features/order/provider/order-provider";
import { useShopConfig } from "@/components/features/shop-config/provider/shop-config-provider";
import BottomSheet from "@/components/shared/common/bottom-sheet";
import { Field } from "@/components/shared/common/form/field";
import { Form } from "@/components/shared/common/form/form";
import InputWithComponents from "@/components/shared/common/input";
import RowText from "@/components/shared/common/row-text";
import Section from "@/components/shared/common/section";
import { useVirtualKeyboardVisible } from "@/components/shared/hooks/useVirtualKeyboardVisible";
import { useLazyQuery } from "@apollo/client/react";
import { formatDate } from "date-fns";
import React, { FC, useState } from "react";
import toast from "react-hot-toast";
import {
  RiEditFill,
  RiMapPin2Fill,
  RiTimeFill,
  RiUserFill,
} from "react-icons/ri";

interface ReceiverInformationProps {}
const ReceiverInformation: FC<ReceiverInformationProps> = () => {
  const { state } = useOrder();
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const receiverPhone =
    state?.draftOrder?.order?.receiverPhone ||
    state?.draftOrder?.order?.buyerPhone;
  const receiverName =
    state?.draftOrder?.order?.receiverName ||
    state?.draftOrder?.order?.buyerName;
  const userName = receiverPhone
    ? receiverName
      ? `${receiverName} - ${receiverPhone}`
      : receiverPhone
    : "";

  const receiverFullAddress = state?.draftOrder?.order?.receiverFullAddress;

  return (
    <div className="bg-white p-4 shadow-card rounded-lg">
      <Section
        title="Thông tin người nhận hàng"
        className="space-y-3"
        suffix={
          <i className="text-primary" onClick={() => setIsOpenEdit(true)}>
            <RiEditFill size={20} />
          </i>
        }
      >
        <RowText
          titleClassName="w-full"
          contentClassName="w-0"
          title={
            (
              <div
                className={`flex items-center gap-x-1 text-[13px] ${
                  userName ? "text-neutral-600" : "text-neutral-300"
                }`}
              >
                <i className="text-xl">
                  <RiUserFill color="#4C76B1" />
                </i>

                {userName || "Chưa có thông tin"}
              </div>
            ) as unknown as string
          }
          content=""
        />

        <RowText
          titleClassName="w-full"
          contentClassName="w-0"
          title={
            (
              <div
                className={`flex items-center gap-x-1  text-[13px] ${
                  state?.draftOrder?.order?.pickupMethod === "DELIVERY"
                    ? receiverFullAddress
                      ? "text-neutral-600"
                      : "text-neutral-300"
                    : state?.draftOrder?.order?.pickupTime
                    ? "text-neutral-600"
                    : "text-neutral-300"
                }`}
              >
                {state?.draftOrder?.order?.pickupMethod === "DELIVERY" ? (
                  <i className="text-xl">
                    <RiMapPin2Fill color="#EA3939" />
                  </i>
                ) : (
                  <i className="text-xl text-cyan-500">
                    <RiTimeFill />
                  </i>
                )}
                {state?.draftOrder?.order?.pickupMethod === "DELIVERY"
                  ? receiverFullAddress || "Chưa có thông tin"
                  : (state?.draftOrder?.order?.pickupTime &&
                      formatDate(
                        state?.draftOrder?.order?.pickupTime,
                        "dd/MM/yyyy HH:mm"
                      )) ||
                    "Chưa có thông tin"}
              </div>
            ) as unknown as string
          }
          content=""
        />
      </Section>

      <BottomSheet
        zIndex={1000}
        height={
          state?.draftOrder?.order?.pickupMethod === "DELIVERY"
            ? "75vh"
            : "55vh"
        }
        visible={isOpenEdit}
        onClose={() => setIsOpenEdit(false)}
        title="Nhập thông tin người nhận"
      >
        {isOpenEdit && <ReceiverInformationForm onClose={setIsOpenEdit} />}
      </BottomSheet>
    </div>
  );
};

export default ReceiverInformation;

const ReceiverInformationForm = ({ onClose }) => {
  const { shopConfig } = useShopConfig();
  const { updateOrderInput, state } = useOrder();
  const keyboardVisible = useVirtualKeyboardVisible();

  const isShowAddressMap =
    shopConfig.orderConfig?.deliveryConfig?.deliveryAddressConfig
      ?.coordinateBasedAddressConfig?.isActivated;

  const isShowAddressSelect =
    shopConfig.orderConfig?.deliveryConfig?.deliveryAddressConfig
      ?.administrativeAddressConfig?.isActivated;

  const isShow = isShowAddressMap || isShowAddressSelect;

  const handleSubmit = ({
    receiverName,
    receiverPhone,
    receiverFullAddress,
    provinceId,
    districtId,
    wardId,
    lat,
    lng,
    pickupTime,
  }) => {
    updateOrderInput({
      receiverName,
      receiverPhone,
      receiverFullAddress,
      receiverProvinceId: provinceId,
      receiverDistrictId: districtId,
      receiverWardId: wardId,
      latitude: lat,
      longitude: lng,
      pickupTime,
    });

    onClose();
    toast.success("Thêm thông tin người nhận thành công");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      defaultValues={{
        receiverName:
          state?.draftOrder?.order?.receiverName ||
          state?.draftOrder?.order?.buyerName,
        receiverPhone:
          state?.draftOrder?.order?.receiverPhone ||
          state?.draftOrder?.order?.buyerPhone,
        receiverFullAddress: state?.draftOrder?.order?.receiverFullAddress,
        provinceId: state?.draftOrder?.order?.receiverProvinceId,
        districtId: state?.draftOrder?.order?.receiverDistrictId,
        wardId: state?.draftOrder?.order?.receiverWardId,
        lat: state?.draftOrder?.order?.latitude,
        lng: state?.draftOrder?.order?.longitude,
        pickupTime: state?.draftOrder?.order?.pickupTime,
      }}
      className="flex flex-col h-full overflow-y-auto"
    >
      <div className="flex-1 p-4">
        <Field name="receiverName" label="Tên người nhận" required>
          <InputWithComponents
            placeholder="Nhập tên người nhận..."
            className="text-sm placeholder:text-sm h-12"
          />
        </Field>
        <Field
          name="receiverPhone"
          label="Số điện thoại"
          validation={{
            phone: true,
          }}
          required
        >
          <InputWithComponents
            placeholder="Số điện thoại..."
            className="text-sm placeholder:text-sm h-12"
          />
        </Field>
        {isShow && state?.draftOrder?.order?.pickupMethod === "DELIVERY" ? (
          <AddressGroup
            isShowAddressSelect={isShowAddressSelect}
            isShowAddressMap={isShowAddressMap}
            name="receiverFullAddress"
            required={true}
            provinceLabel="Tỉnh/Thành phố"
            districtLabel="Quận/Huyện"
            wardLabel="Phường/Xã"
          />
        ) : (
          <Field name="pickupTime" label="Thời gian lấy hàng" required>
            <OrderStoreTime />
          </Field>
        )}
      </div>
      {!keyboardVisible && (
        <div className="sticky w-full bottom-0 left-0 bg-white shadow-card px-4 pb-4">
          <Form.Footer submitText="Xác nhận" className="mt-0" />
        </div>
      )}
    </Form>
  );
};
