import { OrderItemReducerType } from "./reducer";

export enum OrderItemsActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  FIND = "FIND",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type OrderItemsActions = {
  type:
    | OrderItemsActionTypes.CREATE
    | OrderItemsActionTypes.DELETE
    | OrderItemsActionTypes.LIST
    | OrderItemsActionTypes.FIND
    | OrderItemsActionTypes.UPDATE,
  payload: {
    data: OrderItemReducerType;
  };
};

export function createOrderItemsAction(data: OrderItemReducerType) {
  return {
    type: OrderItemsActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateOrderItemsAction(data: OrderItemReducerType) {
  return {
    type: OrderItemsActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function findOrderItemsAction(data: OrderItemReducerType) {
  return {
    type: OrderItemsActionTypes.FIND,
    payload: {
      data,
    },
  };
}

export function listOrderItemsAction(data: OrderItemReducerType) {
  return {
    type: OrderItemsActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteOrderItemsAction(data: OrderItemReducerType) {
  return {
    type: OrderItemsActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
