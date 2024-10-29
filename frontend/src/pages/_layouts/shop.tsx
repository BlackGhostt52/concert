import { Outlet } from "react-router-dom";
import { GlobalProvider } from "../contexts/global-context";

export const ShopLayout = function () {
  return (
    <GlobalProvider>
      <Outlet />
    </GlobalProvider>
  );
};
