import { UserTypeReducerType } from "./reducer";

export enum UserTypesActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  FIND = "FIND",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type UserTypesActions = {
  type:
    | UserTypesActionTypes.CREATE
    | UserTypesActionTypes.DELETE
    | UserTypesActionTypes.LIST
    | UserTypesActionTypes.FIND
    | UserTypesActionTypes.UPDATE,
  payload: {
    data: UserTypeReducerType;
  };
};

export function createUserTypesAction(data: UserTypeReducerType) {
  return {
    type: UserTypesActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateUserTypesAction(data: UserTypeReducerType) {
  return {
    type: UserTypesActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function findUserTypesAction(data: UserTypeReducerType) {
  return {
    type: UserTypesActionTypes.FIND,
    payload: {
      data,
    },
  };
}

export function listUserTypesAction(data: UserTypeReducerType) {
  return {
    type: UserTypesActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteUserTypesAction(data: UserTypeReducerType) {
  return {
    type: UserTypesActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
