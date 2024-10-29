import { CouponsActions, CouponsActionTypes } from "./actions";

import { produce } from "immer";

export interface CouponReducerType {
  id: number;
  phraseCode: string;
  discount: number;
  idProduct: number;
}

export interface CouponsReducerType {
  coupons: CouponReducerType[];
}

export function couponsReducer(
  state: CouponsReducerType,
  action: CouponsActions,
) {
  switch (action.type) {
    case CouponsActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.coupons.push(action.payload.data);
      });
    case CouponsActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.coupons.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.coupons.splice(findIndex, 1);
        }
      });
    case CouponsActionTypes.LIST:
      return produce(state, function (draft) {
        draft.coupons;
      });
    case CouponsActionTypes.FIND:
    // implement
    case CouponsActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.coupons.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.coupons[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
