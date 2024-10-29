import { OrderReducerType } from "./reducer";

export enum OrdersActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  FIND = "FIND",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type OrdersActions = {
  type:
    | OrdersActionTypes.CREATE
    | OrdersActionTypes.DELETE
    | OrdersActionTypes.LIST
    | OrdersActionTypes.FIND
    | OrdersActionTypes.UPDATE,
  payload: {
    data: OrderReducerType;
  };
};

export function createOrdersAction(data: OrderReducerType) {
  return {
    type: OrdersActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateOrdersAction(data: OrderReducerType) {
  return {
    type: OrdersActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function findOrdersAction(data: OrderReducerType) {
  return {
    type: OrdersActionTypes.FIND,
    payload: {
      data,
    },
  };
}

export function listOrdersAction(data: OrderReducerType) {
  return {
    type: OrdersActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteOrdersAction(data: OrderReducerType) {
  return {
    type: OrdersActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
