import { Form } from "@/components/shared/common/form/form";
import { Img } from "@/components/shared/common/img";
import React, { useState } from "react";
import logo from "@/static/logo.png";
import { Field } from "@/components/shared/common/form/field";
import Select from "@/components/shared/common/select";
import { Option } from "@/types";
import InputWithComponents from "@/components/shared/common/input";
import { useMutation } from "@apollo/client/react";

import { ERole } from "@/components/shared/types/login";
import toast from "react-hot-toast";
import { nativeStorage } from "zmp-sdk/apis";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LoginMemberByPasswordDocument,
  LoginStaffDocument,
} from "@/generated/graphql";
import { useAuth } from "@/components/features/auth/provider/auth-provider";

const Login = () => {
  const navigate = useNavigate();
  const { setMember, setStaff } = useAuth();
  const [loginMemberByPassword] = useMutation(LoginMemberByPasswordDocument);
  const [role, setRole] = useState<ERole>(ERole.MANAGE);
  const [loginStaff] = useMutation(LoginStaffDocument);

  const handleSubmit = async ({ role, username, password, memberCode }) => {
    try {
      if (role === ERole.MANAGE) {
        const res = await loginMemberByPassword({
          variables: {
            username,
            password,
          },
        });

        const token = res.data?.loginMemberByPassword?.token;
        const member = res.data?.loginMemberByPassword?.member;
        if (token && member) {
          setMember(member);
          nativeStorage.setItem("token", token);
        }
      } else {
        const res = await loginStaff({
          variables: {
            username,
            password,
            memberCode,
          },
        });

        const token = res.data?.loginStaff?.token;
        const staff = res.data?.loginStaff?.staff;
        if (token && staff) {
          setStaff(staff);
          nativeStorage.setItem("token", token);
        }
      }

      navigate("/", { replace: true });
      toast.success("Đăng nhập thành công");
    } catch (error: any) {
      console.log("Có lỗi sảy ra: ", error?.message);
      toast.error(error?.message);
    }
  };

  const options: Option[] = [
    { value: ERole.MANAGE, label: "Doanh nghiệp" },
    { value: ERole.STAFF, label: "Nhân viên" },
  ];

  return (
    <Form className="p-4" onSubmit={handleSubmit}>
      <Img src={logo} alt="logo-login" className="w-1/2 mx-auto" />
      <h1 className="font-bold text-center mt-4 text-[#4E5461]">
        <span className="text-primary text-base spacing-">Merchant,</span> Đăng
        nhập cửa hàng
      </h1>
      <p className="mt-1 text-center text-xs text-subtitle">
        Đăng nhập để quản lý cửa hàng của bạn
      </p>

      <div className="mt-4 -mb-2">
        <Field name="role" label="Phân quyền">
          <Select
            label="Phân quyền"
            placeholder="Chọn phân quyền"
            className=" zaui-select-suffix-hidden mb-2"
            options={options}
            closeOnSelect
            defaultValue={"MANAGE"}
            onChange={(val) => {
              setRole(val as ERole);
            }}
          />
        </Field>
        {role === ERole.STAFF && (
          <Field name="memberCode" label="Mã cửa hàng" required>
            <InputWithComponents
              placeholder="Nhập mã cửa hàng..."
              className="text-sm placeholder:text-sm h-12"
            />
          </Field>
        )}

        <Field
          name="username"
          label="Email"
          validation={{
            email: true,
          }}
          required
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
      </div>
      <Form.Footer submitText="Đăng nhập" submitClassName="shadow-lg" />

      <p className="text-center mt-5 text-sm text-subtitle">
        Bạn chưa có tài khoản?{" "}
        <NavLink to={"/register"} className="text-primary font-bold">
          Đăng ký ngay
        </NavLink>
      </p>
    </Form>
  );
};

export default Login;
