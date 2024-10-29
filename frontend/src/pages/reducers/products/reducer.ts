import { ProductsActions, ProductsActionTypes } from "./actions";

import { produce } from "immer";

export interface ProductReducerType {
  id: number;
  quantity: number;
  value: number;
  model: string;
  bestsellerProduct: boolean;
  idv1: number;
  idv2: number;
  idStore: number;
}

export interface ProductsReducerType {
  products: ProductReducerType[];
}

export function productsReducer(
  state: ProductsReducerType,
  action: ProductsActions,
) {
  switch (action.type) {
    case ProductsActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.products.push(action.payload.data);
      });
    case ProductsActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.products.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.products.splice(findIndex, 1);
        }
      });
    case ProductsActionTypes.LIST:
      return produce(state, function (draft) {
        draft.products;
      });
    case ProductsActionTypes.FIND:
    // implement
    case ProductsActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.products.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.products[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
