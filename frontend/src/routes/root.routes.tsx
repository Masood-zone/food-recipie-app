import AuthLayout from "@/pages/auth";
import RootLayout from "@/pages/root.layout";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { ProtectedRoute } from "./protected.routes";

const rootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />}>
        {/* Home */}
        <Route
          path="/"
          lazy={async () => {
            const { default: HomeLayout } = await import(
              "@/pages/client/home/index"
            );
            return { Component: HomeLayout };
          }}
        >
          {/* Home page */}
          <Route
            index
            lazy={async () => {
              const { default: Home } = await import(
                "@/pages/client/home/home"
              );
              return { Component: Home };
            }}
          />
          {/* About us */}
          <Route
            path="about-us"
            lazy={async () => {
              const { default: AboutUs } = await import("@/pages/client/about");
              return { Component: AboutUs };
            }}
          />
          {/* Cart */}
          <Route
            path="cart"
            lazy={async () => {
              const { default: Cart } = await import("@/pages/client/cart");
              return { Component: Cart };
            }}
          />
          {/* Checkout */}
        </Route>
        {/* Auth Routes */}
        <Route path="auth" element={<AuthLayout />}>
          {/* Login */}
          <Route
            path="signup"
            lazy={async () => {
              const { default: Signup } = await import("@/pages/auth/signup");
              return { Component: Signup };
            }}
          />
          <Route
            path="login"
            lazy={async () => {
              const { default: Login } = await import("@/pages/auth/login");
              return { Component: Login };
            }}
          />
          {/* Forgot password */}
          <Route
            path="forgot-password"
            lazy={async () => {
              const { default: ForgotPassword } = await import(
                "@/pages/auth/forgot-password"
              );
              return { Component: ForgotPassword };
            }}
          />
          {/* Verify OTP */}
          <Route
            path="verify-otp"
            lazy={async () => {
              const { default: VerifyOTP } = await import(
                "@/pages/auth/verify-otp.tsx"
              );
              return { Component: VerifyOTP };
            }}
          />
          {/* Reset Password*/}
          <Route
            path="reset-password"
            lazy={async () => {
              const { default: ResetPassword } = await import(
                "@/pages/auth/reset-password.tsx"
              );
              return { Component: ResetPassword };
            }}
          />
          {/* User */}
          <Route
            path="user"
            lazy={async () => {
              const { default: User } = await import("@/pages/auth/user/user");
              return { Component: User };
            }}
          />
        </Route>
        {/* Not found */}
        <Route
          path="*"
          lazy={async () => {
            const { default: NotFound } = await import("@/pages/not-found");
            return { Component: NotFound };
          }}
        />
        {/* Admin Layout */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="admin"
            lazy={async () => {
              const { default: AdminLayout } = await import(
                "@/pages/admin/pages/layout"
              );
              return { Component: AdminLayout };
            }}
          >
            {/* Dashboard */}
            <Route
              index
              lazy={async () => {
                const { default: Dashboard } = await import(
                  "@/pages/admin/pages/dashboard/index"
                );
                return { Component: Dashboard };
              }}
            />
          </Route>
        </Route>
      </Route>
    </>
  )
);

export default rootRoutes;
