import { UserTypesActions, UserTypesActionTypes } from "./actions";

import { produce } from "immer";

export interface UserTypeReducerType {
  id: number;
  description: string;
}

export interface UserTypesReducerType {
  userTypes: UserTypeReducerType[];
}

export function userTypesReducer(
  state: UserTypesReducerType,
  action: UserTypesActions,
) {
  switch (action.type) {
    case UserTypesActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.userTypes.push(action.payload.data);
      });
    case UserTypesActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.userTypes.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.userTypes.splice(findIndex, 1);
        }
      });
    case UserTypesActionTypes.LIST:
      return produce(state, function (draft) {
        draft.userTypes;
      });
    case UserTypesActionTypes.FIND:
    // implement
    case UserTypesActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.userTypes.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.userTypes[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
