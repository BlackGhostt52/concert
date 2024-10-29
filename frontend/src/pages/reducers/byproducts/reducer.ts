import { ByproductsActions, ByproductsActionTypes } from "./actions";

import { produce } from "immer";

export interface ByproductReducerType {
  id: number;
  idProduct: number;
  idSubcategory: number;
}

export interface ByproductsReducerType {
  byproducts: ByproductReducerType[];
}

export function byproductsReducer(
  state: ByproductsReducerType,
  action: ByproductsActions,
) {
  switch (action.type) {
    case ByproductsActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.byproducts.push(action.payload.data);
      });
    case ByproductsActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.byproducts.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.byproducts.splice(findIndex, 1);
        }
      });
    case ByproductsActionTypes.LIST:
      return produce(state, function (draft) {
        draft.byproducts;
      });
    case ByproductsActionTypes.FIND:
    // implement
    case ByproductsActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.byproducts.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.byproducts[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
