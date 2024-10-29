import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  CouponReducerType,
  CouponsReducerType,
  couponsReducer,
} from "../reducers/coupons/reducer";
import {
  createCouponsAction,
  deleteCouponsAction,
  listCouponsAction,
  findCouponsAction,
  updateCouponsAction,
} from "../reducers/coupons/actions";

export interface CouponsContextTypes {
  couponsState: CouponsReducerType;
  createCoupons(data: CouponReducerType): void;
  updateCoupons(data: CouponReducerType): void;
  findCoupons(data: CouponReducerType): void;
  listCoupons(data: CouponReducerType): void;
  deleteCoupons(data: CouponReducerType): void;
}

export const CouponsContext = createContext<CouponsContextTypes>(
  {} as CouponsContextTypes,
);

interface CouponsProviderProps {
  children: ReactNode;
}

export function CouponsProvider({ children }: CouponsProviderProps) {
  const [couponsState, couponsDispatcher] = useReducer(couponsReducer, {
    coupons: [],
  });

  function createCoupons(data: CouponReducerType) {
    couponsDispatcher(createCouponsAction(data));
  }

  function updateCoupons(data: CouponReducerType) {
    couponsDispatcher(updateCouponsAction(data));
  }

  function findCoupons(data: CouponReducerType) {
    couponsDispatcher(findCouponsAction(data));
  }

  function listCoupons(data: CouponReducerType) {
    couponsDispatcher(listCouponsAction(data));
  }

  function deleteCoupons(data: CouponReducerType) {
    couponsDispatcher(deleteCouponsAction(data));
  }

  return (
    <CouponsContext.Provider
      value={{
        couponsState,
        createCoupons,
        updateCoupons,
        listCoupons,
        deleteCoupons,
        findCoupons,
      }}
    >
      {children}
    </CouponsContext.Provider>
  );
}

export const useCouponsContext = function () {
  const context = useContextSelector(CouponsContext, (context) => {
    return context;
  });

  ;

  if (!context)
    throw new Error(
      "useCouponsContext must be used within CouponsProvider",
    );
  return context;
};
