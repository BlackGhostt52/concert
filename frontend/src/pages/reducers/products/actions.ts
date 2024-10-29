import { ProductReducerType } from "./reducer";

export enum ProductsActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  FIND = "FIND",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type ProductsActions = {
  type:
    | ProductsActionTypes.CREATE
    | ProductsActionTypes.DELETE
    | ProductsActionTypes.LIST
    | ProductsActionTypes.FIND
    | ProductsActionTypes.UPDATE,
  payload: {
    data: ProductReducerType;
  };
};

export function createProductsAction(data: ProductReducerType) {
  return {
    type: ProductsActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateProductsAction(data: ProductReducerType) {
  return {
    type: ProductsActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function findProductsAction(data: ProductReducerType) {
  return {
    type: ProductsActionTypes.FIND,
    payload: {
      data,
    },
  };
}

export function listProductsAction(data: ProductReducerType) {
  return {
    type: ProductsActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteProductsAction(data: ProductReducerType) {
  return {
    type: ProductsActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
