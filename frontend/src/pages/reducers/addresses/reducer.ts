import { AddressesActions, AddressesActionTypes } from "./actions";

import { produce } from "immer";

export interface AddressReducerType {
  id: number;
  country: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement: string;
  idUser: number;
}

export interface AddressesReducerType {
  addresses: AddressReducerType[];
}

export function addressesReducer(
  state: AddressesReducerType,
  action: AddressesActions,
) {
  switch (action.type) {
    case AddressesActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.addresses.push(action.payload.data);
      });
    case AddressesActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.addresses.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.addresses.splice(findIndex, 1);
        }
      });
    case AddressesActionTypes.LIST:
      return produce(state, function (draft) {
        draft.addresses;
      });
    case AddressesActionTypes.FIND:
    // implement
    case AddressesActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.addresses.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.addresses[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
