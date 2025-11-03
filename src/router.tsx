import Layout from "@/components/layout/layout";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { lazy } from "react";
import { nativeStorage } from "zmp-sdk";
import { isTokenExpired } from "@/components/shared/utils/token";
import { AuthProvider } from "@/components/features/auth/provider/auth-provider";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "@/types";
import { OrderProvider } from "@/components/features/order/provider/order-provider";
import { getBasePath } from "@/components/shared/utils/zma";
import { ShopConfigProvider } from "@/components/features/shop-config/provider/shop-config-provider";

const HomePage = lazy(() => import("@/pages/home/"));
const LoginPage = lazy(() => import("@/pages/login/"));
const RegisterPage = lazy(() => import("@/pages/register/"));
const RegisterInformationPage = lazy(
  () => import("@/pages/register/register-information/")
);
const RegisterLegalPage = lazy(
  () => import("@/pages/register/register-legal/")
);
const RegisterShopTypePage = lazy(
  () => import("@/pages/register/register-shopType/")
);
const RegisterFeaturesPage = lazy(
  () => import("@/pages/register/register-features/")
);
const RegisterOverviewPage = lazy(
  () => import("@/pages/register/register-overview/")
);
const CreateOrderPage = lazy(() => import("@/pages/create-order"));
const AddProductPage = lazy(() => import("@/pages/product/"));

const authLoader = () => {
  const token = nativeStorage.getItem(`token`);
  if (!token || isTokenExpired(token)) {
    return { isAuthenticated: false, role: null, userId: null };
  }

  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return {
      isAuthenticated: true,
      role: decoded.role,
      userId: decoded._id,
      username: decoded.username,
    };
  } catch (error) {
    console.error("Có lỗi sảy ra jwtDecode:", error);
    return { isAuthenticated: false, role: null, userId: null };
  }
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <AuthProvider>
          <ShopConfigProvider>
            <Layout />
          </ShopConfigProvider>
        </AuthProvider>
      ),
      loader: authLoader,
      children: [
        {
          path: "/",
          element: <HomePage />,
          handle: {
            logo: true,
            search: true,
            requiresAuth: true,
          },
        },
        {
          path: "/create-order",
          element: (
            <OrderProvider>
              <Outlet />
            </OrderProvider>
          ),
          children: [
            {
              path: "",
              element: <CreateOrderPage />,
              handle: {
                title: "Xác nhận đơn hàng",
                noFooter: true,
              },
            },
            {
              path: "add-products",
              element: <AddProductPage />,
              handle: {
                title: "Chọn sản phẩm",
                noBack: false,
                noHeader: false,
                noFooter: true,
              },
            },
          ],
        },
        {
          path: "/login",
          element: <LoginPage />,
          handle: {
            title: "Đăng nhập",
            noFooter: true,
            noBack: true,
            noHeader: true,
          },
        },
        {
          path: "/register",
          element: <RegisterPage />,
          handle: {
            title: "Đăng ký",
            noFooter: true,
            noBack: true,
            noHeader: true,
          },
          children: [
            {
              index: true,
              element: <Navigate to="information" replace />,
            },
            {
              path: "information",
              element: <RegisterInformationPage />,
              handle: {
                title: "Đăng ký",
                noFooter: true,
                noHeader: true,
              },
            },
            {
              path: "legal",
              element: <RegisterLegalPage />,
              handle: {
                title: "Đăng ký",
                noFooter: true,
                noHeader: true,
              },
            },
            {
              path: "type",
              element: <RegisterShopTypePage />,
              handle: {
                title: "Đăng ký",
                noFooter: true,
                noHeader: true,
              },
            },
            {
              path: "features",
              element: <RegisterFeaturesPage />,
              handle: {
                title: "Đăng ký",
                noFooter: true,
                noHeader: true,
              },
            },
            {
              path: "overview",
              element: <RegisterOverviewPage />,
              handle: {
                title: "Đăng ký",
                noFooter: true,
                noHeader: true,
              },
            },
          ],
        },
      ],
    },
  ],
  { basename: getBasePath() }
);

export default router;
