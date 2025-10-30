import { useRegister } from "@/components/features/auth/components/register/provider/register-provider";
import { Form } from "@/components/shared/common/form/form";
import { LEGAL_ENTITY_TYPE_OPTIONS } from "@/components/shared/types/member";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";

const RegisterLegal = () => {
  const navigate = useNavigate();
  const { data, updateData } = useRegister();
  console.log("data: ", data);

  const onSubmit = (formData: any) => {
    console.log("formData: ", formData);
    updateData(formData);
    navigate("/register/type");
  };

  return (
    <Form
      onSubmit={onSubmit}
      defaultValues={{ ...data }}
      className="flex-1 flex flex-col justify-between"
    >
      <div className="pt-4">
        <h1 className="font-bold text-center text-[#4E5461] text-2xl">
          Hình thức pháp lý
        </h1>
        <p className="mt-1 text-center text-sm text-subtitle">
          Chọn các hình thức pháp lý sau
        </p>
        <div className="mt-4 space-y-3 p-4">
          <LegalField />
        </div>
      </div>

      <div className="sticky w-full bottom-0 left-0 bg-white p-4">
        <Form.Footer submitText="Tiếp theo" />
      </div>
    </Form>
  );
};

export default RegisterLegal;

const LegalField = () => {
  const { setValue, register, watch } = useFormContext();
  const name = "legalEntityType";
  const legalEntityType = watch(name);

  useEffect(() => {
    register(name);
  }, [name]);

  return (
    <>
      {LEGAL_ENTITY_TYPE_OPTIONS.map((legal) => (
        <div
          key={legal.value}
          className={`p-4 rounded-lg  border border-neutral-200 ${
            legalEntityType === legal.value
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
