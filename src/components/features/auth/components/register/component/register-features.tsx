import { useRegister } from "@/components/features/auth/components/register/provider/register-provider";
import { Form } from "@/components/shared/common/form/form";
import { FEATURE_GROUP_OPTIONS } from "@/components/shared/types/member";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { RiCheckLine } from "react-icons/ri";
import { useNavigate } from "react-router";

const RegisterFeatures = () => {
  const navigate = useNavigate();
  const { data, updateData } = useRegister();

  const onSubmit = (formData: any) => {
    updateData(formData);
    navigate("/register/overview");
  };

  return (
    <Form onSubmit={onSubmit} defaultValues={{ ...data }}>
      <div className="p-4 sticky top-0 bg-white">
        <h1 className="font-bold  text-[#4E5461] text-2xl ">
          Chọn tính năng bạn muốn dùng
        </h1>
        <p className="mt-1  text-sm text-subtitle">
          Bạn có thể chọn nhiều tính năng. Hệ thống sẽ bật cấu hình tối thiểu
          cho mỗi tính năng.
        </p>
      </div>
      <div className="space-y-3 px-4 pb-28">
        <FeaturesField />
      </div>

      <div className="fixed w-full bottom-0 left-0 bg-white p-4">
        <Form.Footer submitText="Tiếp theo" />
      </div>
    </Form>
  );
};

export default RegisterFeatures;

const FeaturesField = () => {
  const { setValue, register, watch } = useFormContext();
  const name = "initFeatureGroups";
  const initFeatureGroups: string[] = watch(name) || [];

  useEffect(() => {
    register(name);
  }, [name, register]);

  const toggleFeature = (featureValue: string) => {
    const currentFeatures = [...initFeatureGroups];
    const featureIndex = currentFeatures.indexOf(featureValue);

    if (featureIndex > -1) {
      currentFeatures.splice(featureIndex, 1);
    } else {
      currentFeatures.push(featureValue);
    }

    setValue(name, currentFeatures, { shouldValidate: true });
  };

  return (
    <div className="space-y-3">
      {FEATURE_GROUP_OPTIONS.map((legal) => {
        const isSelected = initFeatureGroups.includes(legal.value);

        return (
          <div
            key={legal.value}
            className={`p-4 rounded-lg border transition-all flex items-center justify-between ${
              isSelected
                ? "bg-primary-light text-primary border-primary"
                : "border-neutral-200 text-title hover:border-gray-300"
            }`}
            onClick={() => toggleFeature(legal.value)}
          >
            <div>
              <div>{legal.label}</div>
              <div className="text-xs text-subtitle">{legal.desc}</div>
            </div>
            {isSelected && <RiCheckLine className="text-primary" size={20} />}
          </div>
        );
      })}
    </div>
  );
};
