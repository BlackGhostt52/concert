import { PaymentReducerType } from "./reducer";

export enum PaymentsActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  FIND = "FIND",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type PaymentsActions = {
  type:
    | PaymentsActionTypes.CREATE
    | PaymentsActionTypes.DELETE
    | PaymentsActionTypes.LIST
    | PaymentsActionTypes.FIND
    | PaymentsActionTypes.UPDATE,
  payload: {
    data: PaymentReducerType;
  };
};

export function createPaymentsAction(data: PaymentReducerType) {
  return {
    type: PaymentsActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updatePaymentsAction(data: PaymentReducerType) {
  return {
    type: PaymentsActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function findPaymentsAction(data: PaymentReducerType) {
  return {
    type: PaymentsActionTypes.FIND,
    payload: {
      data,
    },
  };
}

export function listPaymentsAction(data: PaymentReducerType) {
  return {
    type: PaymentsActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deletePaymentsAction(data: PaymentReducerType) {
  return {
    type: PaymentsActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
