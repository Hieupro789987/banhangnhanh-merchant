import RegisterProgress from "@/components/features/auth/components/register/component/register-progress";
import { RegisterProvider } from "@/components/features/auth/components/register/provider/register-provider";
import { PageSkeleton } from "@/components/shared/common/skeleton";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Register = () => {
  return (
    <RegisterProvider>
      <div className="min-h-full flex flex-col bg-white">
        <div className="sticky top-0 z-10">
          <RegisterProgress />
        </div>

        <div className="flex-1 flex flex-col">
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </RegisterProvider>
  );
};

export default Register;
