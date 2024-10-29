import { UsersActions, UsersActionTypes } from "./actions";

import { produce } from "immer";

export interface UserReducerType {
  id: number;
  name: string;
  identity: string;
  email: string;
  password: string;
  idUserType: number;
}

export interface UsersReducerType {
  users: UserReducerType[];
}

export function usersReducer(state: UsersReducerType, action: UsersActions) {
  switch (action.type) {
    case UsersActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.users.push(action.payload.data);
      });
    case UsersActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.users.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.users.splice(findIndex, 1);
        }
      });
    case UsersActionTypes.LIST:
      return produce(state, function (draft) {
        draft.users;
      });
    case UsersActionTypes.FIND:
    // implement
    case UsersActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.users.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.users[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
