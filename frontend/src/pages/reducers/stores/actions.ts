import { StoreReducerType } from "./reducer";

export enum StoresActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  FIND = "FIND",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type StoresActions = {
  type:
    | StoresActionTypes.CREATE
    | StoresActionTypes.DELETE
    | StoresActionTypes.LIST
    | StoresActionTypes.FIND
    | StoresActionTypes.UPDATE,
  payload: {
    data: StoreReducerType;
  };
};

export function createStoresAction(data: StoreReducerType) {
  return {
    type: StoresActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateStoresAction(data: StoreReducerType) {
  return {
    type: StoresActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function findStoresAction(data: StoreReducerType) {
  return {
    type: StoresActionTypes.FIND,
    payload: {
      data,
    },
  };
}

export function listStoresAction(data: StoreReducerType) {
  return {
    type: StoresActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteStoresAction(data: StoreReducerType) {
  return {
    type: StoresActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
