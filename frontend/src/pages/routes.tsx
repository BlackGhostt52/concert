import { createBrowserRouter } from "react-router-dom";

import { AdminLayout } from "./_layouts/admin";
import { AppLayout } from "./_layouts/app";
import { AuthLayout } from "./_layouts/auth";
import { ShopLayout } from "./_layouts/shop";
import { ProfileLayout } from "./_layouts/shop-profile";
import { Dashboard } from "./admin/dashboard";
import { Home } from "./app/home";
import { Login } from "./auth/login";
import { Register } from "./auth/register";
import { Verify } from "./auth/verify";
import { Checkout } from "./shop/checkout";
import { ForgotPassword } from "./shop/forgot-password";
import { Home as ShopHome } from "./shop/home";
import { ManageAddresses } from "./shop/profile/manage-addresses";
import { Notifications } from "./shop/profile/notifications";
import { Orders } from "./shop/profile/orders";
import { ProceedCheckout } from "./shop/proceed-checkout";
import { Product } from "./shop/product";
import { ProductList } from "./shop/product-list";
import { ResetPassword } from "./shop/reset-password";
import { SavedCards } from "./shop/profile/saved-cards";
import { Settings } from "./shop/profile/settings";
import { SignIn } from "./shop/sign-in";
import { SignUp } from "./shop/sign-up";
import { Wishes } from "./shop/profile/wishes";
import { Profile } from "./shop/profile";

export const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <AppLayout />,
  //   children: [
  //     { path: '/', element: <Home /> },
  //     { path: '/profile', element: <Profile /> },
  //   ],
  // },

  {
    path: "/",
    element: <ShopLayout />,
    children: [
      {
        path: "/",
        element: <ShopHome />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/product/:slug",
        element: <Product />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/shipping-address",
        element: <ProceedCheckout />,
      },
    ],
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profile/orders",
        element: <Orders />,
      },
      {
        path: "/profile/wishes",
        element: <Wishes />,
      },
      {
        path: "/profile/address",
        element: <ManageAddresses />,
      },
      {
        path: "/profile/saved-cards",
        element: <SavedCards />,
      },
      {
        path: "/profile/notifications",
        element: <Notifications />,
      },
      {
        path: "/profile/settings",
        element: <Settings />,
      },
    ],
  },
]);
