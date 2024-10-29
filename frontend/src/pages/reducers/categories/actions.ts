import { CategoryReducerType } from "./reducer";

export enum CategoriesActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  FIND = "FIND",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type CategoriesActions = {
  type:
    | CategoriesActionTypes.CREATE
    | CategoriesActionTypes.DELETE
    | CategoriesActionTypes.LIST
    | CategoriesActionTypes.FIND
    | CategoriesActionTypes.UPDATE,
  payload: {
    data: CategoryReducerType;
  };
};

export function createCategoriesAction(data: CategoryReducerType) {
  return {
    type: CategoriesActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateCategoriesAction(data: CategoryReducerType) {
  return {
    type: CategoriesActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function findCategoriesAction(data: CategoryReducerType) {
  return {
    type: CategoriesActionTypes.FIND,
    payload: {
      data,
    },
  };
}

export function listCategoriesAction(data: CategoryReducerType) {
  return {
    type: CategoriesActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteCategoriesAction(data: CategoryReducerType) {
  return {
    type: CategoriesActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
