import { useOrder } from "@/components/features/order/provider/order-provider";
import AsyncSelect from "@/components/shared/common/async-select";
import BottomSheet from "@/components/shared/common/bottom-sheet";
import { Field } from "@/components/shared/common/form/field";
import { Form } from "@/components/shared/common/form/form";
import InputWithComponents from "@/components/shared/common/input";
import RowText from "@/components/shared/common/row-text";
import Section from "@/components/shared/common/section";
import { useVirtualKeyboardVisible } from "@/components/shared/hooks/useVirtualKeyboardVisible";
import { GetAllCustomerDocument } from "@/generated/graphql";
import { Option } from "@/types";
import { useLazyQuery, useQuery } from "@apollo/client/react";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import toast from "react-hot-toast";
import { RiEditFill, RiPhoneFill, RiUserFill } from "react-icons/ri";

const BuyerInformation = () => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const { state } = useOrder();
  const userName = state?.draftOrder?.order?.buyerName;
  const phone = state?.draftOrder?.order?.buyerPhone;

  return (
    <div className="bg-white p-4 shadow-card rounded-lg">
      <Section
        title="Thông tin người mua"
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
                className={`flex items-center gap-x-1 text-[13px] ${
                  phone ? "text-neutral-600" : "text-neutral-300"
                }`}
              >
                <i className="text-xl text-red-600">
                  <RiPhoneFill />
                </i>

                {phone || "Chưa có thông tin"}
              </div>
            ) as unknown as string
          }
          content=""
        />
      </Section>

      <BottomSheet
        zIndex={1000}
        height="45vh"
        visible={isOpenEdit}
        onClose={() => setIsOpenEdit(false)}
        title="Nhập thông tin người mua"
      >
        <BuyerInformationForm onClose={setIsOpenEdit} />
      </BottomSheet>
    </div>
  );
};

export default BuyerInformation;

const BuyerInformationForm = ({ onClose }) => {
  const { updateOrderInput, state } = useOrder();
  const keyboardVisible = useVirtualKeyboardVisible();

  const handleSubmit = ({ buyerName, buyerPhone }) => {
    if (buyerName && buyerPhone) {
      updateOrderInput({
        buyerName,
        buyerPhone,
      });

      onClose();
      toast.success("Thêm thông tin người mua thành công");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      defaultValues={{
        buyerName: state?.draftOrder?.order?.buyerName,
        buyerPhone: state?.draftOrder?.order?.buyerPhone,
      }}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="p-4 ">
          <BuyerPhoneField />

          <Field name="buyerName" label="Tên người mua" required>
            <InputWithComponents
              placeholder="Nhập tên người mua..."
              className="text-sm placeholder:text-sm h-12"
            />
          </Field>
        </div>
        {!keyboardVisible && (
          <div className="sticky w-full bottom-0 left-0 bg-white shadow-card px-4 pb-4">
            <Form.Footer submitText="Xác nhận" className="mt-0" />
          </div>
        )}
      </div>
    </Form>
  );
};

const BuyerPhoneField = () => {
  const [getAllCustomer] = useLazyQuery(GetAllCustomerDocument);
  const { setValue } = useFormContext();
  return (
    <Field name="buyerPhone" label="SĐT người mua" required>
      <AsyncSelect
        optionsPromise={async ({ search }) => {
          const result = await getAllCustomer({
            variables: {
              q: {
                search: search || undefined,
                limit: 20,
              },
            },
          });
          const dataList = result.data?.getAllCustomer?.data;
          if (!dataList?.length) return [];
          return dataList.map((customer) => ({
            value: customer?.id,
            label: customer?.phone,
            desc: customer?.name,
            image: customer?.avatar,
          })) as Option[];
        }}
        onSelect={({ selectedItem }) => {
          setValue("buyerName", selectedItem.desc);
          setValue("buyerPhone", selectedItem.label);
        }}
        placeholder="Nhập SĐT tìm kiếm..."
      />
    </Field>
  );
};
