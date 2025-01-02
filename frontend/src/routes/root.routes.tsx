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
            path="about"
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
          {/* Contact Us */}
          <Route
            path="contact"
            lazy={async () => {
              const { default: ContactUs } = await import(
                "@/pages/client/contact/contact"
              );
              return { Component: ContactUs };
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
            {/* Users */}
            <Route
              path="users"
              lazy={async () => {
                const { default: UsersLayout } = await import(
                  "@/pages/admin/pages/users/index"
                );
                return { Component: UsersLayout };
              }}
            >
              <Route
                index
                lazy={async () => {
                  const { default: Users } = await import(
                    "@/pages/admin/pages/users/users"
                  );
                  return { Component: Users };
                }}
              />
              {/* Add User */}
              <Route
                path="add"
                lazy={async () => {
                  const { default: AddUser } = await import(
                    "@/pages/admin/pages/users/add/add-user"
                  );
                  return { Component: AddUser };
                }}
              />
              {/* Edit User */}
              <Route
                path="edit/:userId"
                lazy={async () => {
                  const { default: EditUser } = await import(
                    "@/pages/admin/pages/users/edit/edit-user"
                  );
                  return { Component: EditUser };
                }}
              />
              {/* View User */}
              <Route
                path="view/:userId"
                lazy={async () => {
                  const { default: ViewUser } = await import(
                    "@/pages/admin/pages/users/view/view-user"
                  );
                  return { Component: ViewUser };
                }}
              />
            </Route>
            {/* Customers */}
            <Route
              path="customers"
              lazy={async () => {
                const { default: CustomersLayout } = await import(
                  "@/pages/admin/pages/customers/index"
                );
                return { Component: CustomersLayout };
              }}
            >
              <Route
                index
                lazy={async () => {
                  const { default: Customers } = await import(
                    "@/pages/admin/pages/customers/customers"
                  );
                  return { Component: Customers };
                }}
              />
              {/* Add Customer */}
              <Route
                path="add"
                lazy={async () => {
                  const { default: AddCustomer } = await import(
                    "@/pages/admin/pages/customers/add/add-customer"
                  );
                  return { Component: AddCustomer };
                }}
              />
              {/* Edit Customer */}
              <Route
                path="edit/:customerId"
                lazy={async () => {
                  const { default: EditCustomer } = await import(
                    "@/pages/admin/pages/customers/edit/edit-customer"
                  );
                  return { Component: EditCustomer };
                }}
              />
              {/* View Customer */}
              <Route
                path="view/:customerId"
                lazy={async () => {
                  const { default: ViewCustomer } = await import(
                    "@/pages/admin/pages/customers/view/view-customer"
                  );
                  return { Component: ViewCustomer };
                }}
              />
            </Route>
            {/* Category */}
            <Route
              path="category"
              lazy={async () => {
                const { default: CategoryLayout } = await import(
                  "@/pages/admin/pages/category"
                );
                return { Component: CategoryLayout };
              }}
            >
              <Route
                index
                lazy={async () => {
                  const { default: Category } = await import(
                    "@/pages/admin/pages/category/category"
                  );
                  return { Component: Category };
                }}
              />
              {/* Add Category */}
              <Route
                path="add"
                lazy={async () => {
                  const { default: AddCategory } = await import(
                    "@/pages/admin/pages/category/add/add-category"
                  );
                  return { Component: AddCategory };
                }}
              />
              {/* Edit Category */}
              <Route
                path="edit/:categoryId"
                lazy={async () => {
                  const { default: EditCategory } = await import(
                    "@/pages/admin/pages/category/edit/edit-category"
                  );
                  return { Component: EditCategory };
                }}
              />
              {/* View Category */}
              <Route
                path="view/:categoryId"
                lazy={async () => {
                  const { default: ViewCategory } = await import(
                    "@/pages/admin/pages/category/view/view-category"
                  );
                  return { Component: ViewCategory };
                }}
              />
            </Route>
            {/* Products */}
            <Route
              path="products"
              lazy={async () => {
                const { default: ProductsLayout } = await import(
                  "@/pages/admin/pages/products"
                );
                return { Component: ProductsLayout };
              }}
            >
              <Route
                index
                lazy={async () => {
                  const { default: Products } = await import(
                    "@/pages/admin/pages/products/products"
                  );
                  return { Component: Products };
                }}
              />
              {/* Add Product */}
              <Route
                path="add"
                lazy={async () => {
                  const { default: AddProduct } = await import(
                    "@/pages/admin/pages/products/add/add-product"
                  );
                  return { Component: AddProduct };
                }}
              />
              {/* Edit Product */}
              <Route
                path="edit/:productId"
                lazy={async () => {
                  const { default: EditProduct } = await import(
                    "@/pages/admin/pages/products/edit/edit-product"
                  );
                  return { Component: EditProduct };
                }}
              />
              {/* View Product */}
              <Route
                path="view/:productId"
                lazy={async () => {
                  const { default: ViewProduct } = await import(
                    "@/pages/admin/pages/products/view/view-product"
                  );
                  return { Component: ViewProduct };
                }}
              />
            </Route>
            {/* Orders */}
            <Route
              path="orders"
              lazy={async () => {
                const { default: OrdersLayout } = await import(
                  "@/pages/admin/pages/orders"
                );
                return { Component: OrdersLayout };
              }}
            >
              <Route
                index
                lazy={async () => {
                  const { default: Orders } = await import(
                    "@/pages/admin/pages/orders/orders"
                  );
                  return { Component: Orders };
                }}
              />
              {/* Add Order */}
              <Route
                path="add"
                lazy={async () => {
                  const { default: AddOrder } = await import(
                    "@/pages/admin/pages/orders/add/add-order"
                  );
                  return { Component: AddOrder };
                }}
              />
              {/* Edit Order */}
              <Route
                path="edit/:orderId"
                lazy={async () => {
                  const { default: EditOrder } = await import(
                    "@/pages/admin/pages/orders/edit/edit-order"
                  );
                  return { Component: EditOrder };
                }}
              />
              {/* View Order */}
              <Route
                path="view/:orderId"
                lazy={async () => {
                  const { default: ViewOrder } = await import(
                    "@/pages/admin/pages/orders/view/view-order"
                  );
                  return { Component: ViewOrder };
                }}
              />
            </Route>
            {/* Settings */}
            <Route
              path="settings"
              lazy={async () => {
                const { default: SettingsLayout } = await import(
                  "@/pages/admin/pages/settings"
                );
                return { Component: SettingsLayout };
              }}
            >
              <Route
                index
                lazy={async () => {
                  const { default: Settings } = await import(
                    "@/pages/admin/pages/settings/settings"
                  );
                  return { Component: Settings };
                }}
              />
              {/* Account */}
              <Route
                path="account"
                lazy={async () => {
                  const { default: Account } = await import(
                    "@/pages/admin/pages/settings/account/account"
                  );
                  return { Component: Account };
                }}
              />
              {/* Danger Zone */}
              <Route
                path="danger"
                lazy={async () => {
                  const { default: Danger } = await import(
                    "@/pages/admin/pages/settings/danger/danger"
                  );
                  return { Component: Danger };
                }}
              />
            </Route>
            {/* Not Found */}
            <Route
              path="*"
              lazy={async () => {
                const { default: NotFound } = await import("@/pages/not-found");
                return { Component: NotFound };
              }}
            />
          </Route>
        </Route>
      </Route>
    </>
  )
);

export default rootRoutes;
