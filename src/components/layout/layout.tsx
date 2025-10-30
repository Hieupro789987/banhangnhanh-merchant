import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

import Footer from "./components/footer";
import { Suspense, useEffect } from "react";
import { PageSkeleton } from "../shared/common/skeleton";
import { Toaster } from "react-hot-toast";
import { ScrollRestoration } from "../shared/common/scroll-restoration";
import Header from "@/components/layout/components/header";
import { nativeStorage } from "zmp-sdk";

export default function Layout() {
  const navigate = useNavigate();
  const loaderData = useLoaderData() as { isAuthenticated?: boolean };

  useEffect(() => {
    const isAuthenticated = loaderData?.isAuthenticated;
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }

    // nativeStorage.removeItem("token");
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col  text-foreground">
      <Header />
      <div className="flex-1 overflow-y-auto bg-background">
        <Suspense fallback={<PageSkeleton />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
      <Toaster
        containerClassName="toast-container"
        containerStyle={{
          top: "calc(50% - 24px)",
        }}
      />

      <ScrollRestoration />
    </div>
  );
}
