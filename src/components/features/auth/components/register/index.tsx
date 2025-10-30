import RegisterProgress from "@/components/features/auth/components/register/component/register-progress";
import { RegisterProvider } from "@/components/features/auth/components/register/provider/register-provider";
import React from "react";
import { Outlet } from "react-router-dom";

const Register = () => {
  return (
    <RegisterProvider>
      <div className="min-h-full flex flex-col bg-white">
        <div className="sticky top-0 z-10">
          <RegisterProgress />
        </div>

        <div className="flex-1 flex flex-col">
          <Outlet />
        </div>
      </div>
    </RegisterProvider>
  );
};

export default Register;
