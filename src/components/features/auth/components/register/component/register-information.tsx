import { Form } from "@/components/shared/common/form/form";
import { Field } from "@/components/shared/common/form/field";
import InputWithComponents from "@/components/shared/common/input";
import { useRegister } from "@/components/features/auth/components/register/provider/register-provider";
import { useNavigate } from "react-router-dom";
import Select from "@/components/shared/common/select";
import { SHOP_TYPE_OPTIONS } from "@/components/shared/types/member";
import ImageUpload from "@/components/shared/common/image-upload";

const RegisterInformation = () => {
  const navigate = useNavigate();
  const { data, updateData } = useRegister();

  const onSubmit = (formData: any) => {
    navigate("/register/legal");
    updateData(formData);
  };

  return (
    <Form onSubmit={onSubmit} defaultValues={{ ...data }}>
      <div className="p-4 sticky top-2 left-0 bg-white z-10">
        <h1 className="font-bold text-center text-[#4E5461] text-2xl">
          Đăng ký tài khoản
        </h1>
        <p className="mt-1 text-center text-sm text-subtitle">
          Nhập thông tin cơ bản của cửa hàng
        </p>
      </div>

      <div className="mt-6 px-4">
        <Field
          name="username"
          label="Email"
          required
          validation={{
            email: true,
          }}
        >
          <InputWithComponents
            placeholder="Nhập email..."
            className="text-sm placeholder:text-sm h-12"
          />
        </Field>

        <Field name="password" label="Mật khẩu" required>
          <InputWithComponents.Password
            visibilityToggle
            placeholder="Nhập mật khẩu..."
            className="text-sm placeholder:text-sm h-12"
          />
        </Field>

        <Field name="name" label="Tên người dùng" required>
          <InputWithComponents
            placeholder="Nhập tên của bạn..."
            className="text-sm placeholder:text-sm h-12"
          />
        </Field>

        <Field
          name="phone"
          label="Số điện thoại"
          required
          validation={{
            phone: true,
          }}
        >
          <InputWithComponents
            placeholder="Nhập số điện thoại..."
            className="text-sm placeholder:text-sm h-12"
          />
        </Field>

        <Field name="shopName" label="Tên cửa hàng" required>
          <InputWithComponents
            placeholder="Nhập tên cửa hàng..."
            className="text-sm placeholder:text-sm h-12"
          />
        </Field>

        <Field name="address" label="Địa chỉ">
          <InputWithComponents
            placeholder="Nhập địa chỉ cửa hàng..."
            className="text-sm placeholder:text-sm h-12"
          />
        </Field>

        <Field name="shopLogo" label="Logo">
          <ImageUpload avatar className="mt-1" />
        </Field>
      </div>

      <div className="sticky w-full bottom-0 left-0 bg-white p-4">
        <Form.Footer submitText="Tiếp theo" />
      </div>
    </Form>
  );
};

export default RegisterInformation;
