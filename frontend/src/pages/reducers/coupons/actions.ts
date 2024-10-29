import { CouponReducerType } from "./reducer";

export enum CouponsActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  FIND = "FIND",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type CouponsActions = {
  type:
    | CouponsActionTypes.CREATE
    | CouponsActionTypes.DELETE
    | CouponsActionTypes.LIST
    | CouponsActionTypes.FIND
    | CouponsActionTypes.UPDATE,
  payload: {
    data: CouponReducerType;
  };
};

export function createCouponsAction(data: CouponReducerType) {
  return {
    type: CouponsActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateCouponsAction(data: CouponReducerType) {
  return {
    type: CouponsActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function findCouponsAction(data: CouponReducerType) {
  return {
    type: CouponsActionTypes.FIND,
    payload: {
      data,
    },
  };
}

export function listCouponsAction(data: CouponReducerType) {
  return {
    type: CouponsActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteCouponsAction(data: CouponReducerType) {
  return {
    type: CouponsActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
