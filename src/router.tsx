import Layout from "@/components/layout/layout";
import HomePage from "@/pages/home";

// import RegisterPage from "@/pages/auth/register";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { getBasePath } from "@/components/shared/utils/zma";
import LoginPage from "@/pages/login";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/login" replace />, // Mở app → redirect đến login
        },
        {
          path: "/login",
          element: <LoginPage />,
          handle: {
            title: "Đăng nhập",
            noFooter: true,
            noFloatingCart: true,
            noHeader: true,
          },
        },
        // {
        //   path: "/register",
        //   element: <RegisterPage />,
        //   handle: {
        //     title: "Đăng ký",
        //     noFooter: true,
        //     noFloatingCart: true,
        //     noHeader: true,
        //   },
        // },
        {
          path: "/home",
          element: <HomePage />,
          handle: {
            logo: true,
            search: true,
            requiresAuth: true,
          },
        },
      ],
    },
  ],
  { basename: getBasePath() }
);

export default router;
