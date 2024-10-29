import { StoresActions, StoresActionTypes } from "./actions";

import { produce } from "immer";

export interface StoreReducerType {
  id: number;
  name: string;
  logo: string;
  banner: string;
  quantityProduct: string;
  background: string;
  fontColor: string;
  area: string;
  cnpj: string;
  idUser: number;
}

export interface StoresReducerType {
  stores: StoreReducerType[];
}

export function storesReducer(state: StoresReducerType, action: StoresActions) {
  switch (action.type) {
    case StoresActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.stores.push(action.payload.data);
      });
    case StoresActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.stores.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.stores.splice(findIndex, 1);
        }
      });
    case StoresActionTypes.LIST:
      return produce(state, function (draft) {
        draft.stores;
      });
    case StoresActionTypes.FIND:
    // implement
    case StoresActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.stores.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.stores[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
