import { useRegister } from "@/components/features/auth/components/register/provider/register-provider";
import ColText from "@/components/shared/common/col-text";
import { Form } from "@/components/shared/common/form/form";
import {
  FEATURE_GROUP_OPTIONS,
  LEGAL_ENTITY_TYPE_OPTIONS,
  SHOP_TYPE_OPTIONS,
} from "@/components/shared/types/member";
import React from "react";
import { RiCheckLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const RegisterOverview = () => {
  const { data, submitRegistration } = useRegister();

  const onSubmit = () => {
    submitRegistration();
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className="p-4 sticky top-0 bg-white">
        <h1 className="font-bold  text-[#4E5461] text-2xl ">
          Hoàn tất & Xem trước
        </h1>
        <p className="mt-1  text-sm text-subtitle">
          Cấu hình của bạn sẽ áp dụng khi đăng nhập — giao diện "Dành cho bạn"
          sẽ hiển thị các tính năng đã chọn.
        </p>
      </div>

      <div className="px-4 pb-28 space-y-3">
        <ColText title="Gmail" content={data.username} />
        <ColText title="Tên người dùng" content={data.name} />
        <ColText title="Số điện thoại" content={data.phone} />
        <ColText title="Tên cửa hàng" content={data.shopName} />
        <ColText
          title="Loại cửa hàng"
          content={
            SHOP_TYPE_OPTIONS.find((x) => x.value === data.shopType)?.label ||
            "Không có"
          }
        />
        <ColText title="Địa chỉ" content={data.address || "-"} />

        <ColText
          title="Hình thức pháp lý"
          content={
            LEGAL_ENTITY_TYPE_OPTIONS.find(
              (x) => x.value === data.legalEntityType
            )?.label || "Không có"
          }
        />

        <ColText
          title="Tính năng"
          content={
            !!data.initFeatureGroups?.length ? (
              <div className="space-y-1">
                {FEATURE_GROUP_OPTIONS.filter((x) =>
                  data.initFeatureGroups?.includes(x.value)
                ).map((feature) => (
                  <div
                    key={feature.value}
                    className="flex items-center text-sm"
                  >
                    <RiCheckLine
                      className="text-green-500 mr-2 flex-shrink-0"
                      size={16}
                    />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
            ) : (
              "_"
            )
          }
        />
      </div>
      <div className="fixed w-full bottom-0 left-0 bg-white p-4">
        <Form.Footer submitText="Tạo tài khoản" />
      </div>
    </Form>
  );
};

export default RegisterOverview;
