import { ByproductReducerType } from "./reducer";

export enum ByproductsActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  FIND = "FIND",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type ByproductsActions = {
  type:
    | ByproductsActionTypes.CREATE
    | ByproductsActionTypes.DELETE
    | ByproductsActionTypes.LIST
    | ByproductsActionTypes.FIND
    | ByproductsActionTypes.UPDATE,
  payload: {
    data: ByproductReducerType;
  };
};

export function createByproductsAction(data: ByproductReducerType) {
  return {
    type: ByproductsActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateByproductsAction(data: ByproductReducerType) {
  return {
    type: ByproductsActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function findByproductsAction(data: ByproductReducerType) {
  return {
    type: ByproductsActionTypes.FIND,
    payload: {
      data,
    },
  };
}

export function listByproductsAction(data: ByproductReducerType) {
  return {
    type: ByproductsActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteByproductsAction(data: ByproductReducerType) {
  return {
    type: ByproductsActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
