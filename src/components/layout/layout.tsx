import { Outlet } from "react-router-dom";

import Footer from "./components/footer";
import { Suspense } from "react";
import { PageSkeleton } from "../shared/common/skeleton";
import { Toaster } from "react-hot-toast";
import { ScrollRestoration } from "../shared/common/scroll-restoration";
import Header from "@/components/layout/components/header";

export default function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col bg-section text-foreground">
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
