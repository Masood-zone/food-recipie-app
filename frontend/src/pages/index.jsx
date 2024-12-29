import Layout from "../components/layout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const rootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* User Section */}
      <Route path="/" element={<Layout />}>
        <Route
          index
          lazy={async () => {
            const { default: Home } = await import("./home");
            return { Component: Home };
          }}
        />
        <Route
          path="about-us"
          lazy={async () => {
            const { default: AboutUs } = await import("./about-us");
            return { Component: AboutUs };
          }}
        />
        <Route
          path="wishlist"
          lazy={async () => {
            const { default: WishList } = await import("./wishlist");
            return { Component: WishList };
          }}
        />
        <Route
          path="recipie-item/:id"
          lazy={async () => {
            const { default: RecipieView } = await import("./menu/recipieView");
            return { Component: RecipieView };
          }}
        />
      </Route>
      {/* Admin Dashboard */}
      <Route
        path="admin"
        lazy={async () => {
          const { default: AdminLayout } = await import("./admin");
          return { Component: AdminLayout };
        }}
      >
        <Route
          index
          lazy={async () => {
            const { default: Users } = await import("./admin/users");
            return { Component: Users };
          }}
        />
        <Route
          path="edit-user/:id"
          lazy={async () => {
            const { default: EditUser } = await import(
              "./admin/users/editUser"
            );
            return { Component: EditUser };
          }}
        />
        <Route
          path="foods"
          lazy={async () => {
            const { default: Foods } = await import("./admin/foods");
            return { Component: Foods };
          }}
        />
        <Route
          path="create-food"
          lazy={async () => {
            const { default: CreateFoods } = await import(
              "./admin/foods/createFoods"
            );
            return { Component: CreateFoods };
          }}
        />
        <Route
          path="edit-food/:id"
          lazy={async () => {
            const { default: EditFood } = await import(
              "./admin/foods/editFood"
            );
            return { Component: EditFood };
          }}
        />
        <Route
          path="category"
          lazy={async () => {
            const { default: Categories } = await import("./admin/categories");
            return { Component: Categories };
          }}
        />
        <Route
          path="create-category"
          lazy={async () => {
            const { default: CreateCategory } = await import(
              "./admin/categories/createCategory"
            );
            return { Component: CreateCategory };
          }}
        />
        <Route
          path="edit-category/:id"
          lazy={async () => {
            const { default: EditCategory } = await import(
              "./admin/categories/editCategory"
            );
            return { Component: EditCategory };
          }}
        />
      </Route>
    </>
  )
);

export default rootRoutes;
