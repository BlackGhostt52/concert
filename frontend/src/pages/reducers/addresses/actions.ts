import { AddressReducerType } from "./reducer";

export enum AddressesActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  FIND = "FIND",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type AddressesActions = {
  type:
    | AddressesActionTypes.CREATE
    | AddressesActionTypes.DELETE
    | AddressesActionTypes.LIST
    | AddressesActionTypes.FIND
    | AddressesActionTypes.UPDATE,
  payload: {
    data: AddressReducerType;
  };
};

export function createAddressesAction(data: AddressReducerType) {
  return {
    type: AddressesActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateAddressesAction(data: AddressReducerType) {
  return {
    type: AddressesActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function findAddressesAction(data: AddressReducerType) {
  return {
    type: AddressesActionTypes.FIND,
    payload: {
      data,
    },
  };
}

export function listAddressesAction(data: AddressReducerType) {
  return {
    type: AddressesActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteAddressesAction(data: AddressReducerType) {
  return {
    type: AddressesActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
