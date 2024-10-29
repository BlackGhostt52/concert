import { UserReducerType } from "./reducer";

export enum UsersActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  FIND = "FIND",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type UsersActions = {
  type:
    | UsersActionTypes.CREATE
    | UsersActionTypes.DELETE
    | UsersActionTypes.LIST
    | UsersActionTypes.FIND
    | UsersActionTypes.UPDATE,
  payload: {
    data: UserReducerType;
  };
};

export function createUsersAction(data: UserReducerType) {
  return {
    type: UsersActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateUsersAction(data: UserReducerType) {
  return {
    type: UsersActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function findUsersAction(data: UserReducerType) {
  return {
    type: UsersActionTypes.FIND,
    payload: {
      data,
    },
  };
}

export function listUsersAction(data: UserReducerType) {
  return {
    type: UsersActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteUsersAction(data: UserReducerType) {
  return {
    type: UsersActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
