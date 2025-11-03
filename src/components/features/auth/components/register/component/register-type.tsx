import { useRegister } from "@/components/features/auth/components/register/provider/register-provider";
import { Form } from "@/components/shared/common/form/form";
import {
  LEGAL_ENTITY_TYPE_OPTIONS,
  SHOP_TYPE_OPTIONS,
} from "@/components/shared/types/member";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";

const RegisterShopType = () => {
  const navigate = useNavigate();
  const { data, updateData } = useRegister();

  const onSubmit = (formData: any) => {
    updateData(formData);
    navigate("/register/features");
  };

  return (
    <Form onSubmit={onSubmit} defaultValues={{ ...data }}>
      <div className="p-4 ">
        <h1 className="font-bold text-center text-[#4E5461] text-2xl">
          Loại cửa hàng
        </h1>
        <p className="mt-1 text-center text-sm text-subtitle">
          Chọn loại cửa hàng sau đây
        </p>
        <div className="mt-4 space-y-3">
          <ShopTypeField />
        </div>
      </div>

      <div className="fixed w-full bottom-0 left-0 bg-white p-4">
        <Form.Footer submitText="Tiếp theo" />
      </div>
    </Form>
  );
};

export default RegisterShopType;

const ShopTypeField = () => {
  const { setValue, register, watch } = useFormContext();
  const name = "shopType";
  const shopType = watch(name);

  useEffect(() => {
    register(name);
  }, [name]);
  return (
    <>
      {SHOP_TYPE_OPTIONS.map((legal) => (
        <div
          key={legal.value}
          className={`p-4 rounded-lg  border border-neutral-200 ${
            shopType === legal.value
              ? "bg-primary-light text-primary"
              : "text-title"
          }`}
          onClick={() => setValue(name, legal.value)}
        >
          {legal.label}
        </div>
      ))}
    </>
  );
};
