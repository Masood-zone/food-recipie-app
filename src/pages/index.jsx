import Layout from "../components/layout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const rootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
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
    </>
  )
);

export default rootRoutes;
