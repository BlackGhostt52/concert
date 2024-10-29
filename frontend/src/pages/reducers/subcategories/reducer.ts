import { SubcategoriesActions, SubcategoriesActionTypes } from "./actions";

import { produce } from "immer";

export interface SubcategoryReducerType {
  id: number;
  description: string;
  idCategory: number;
}

export interface SubcategoriesReducerType {
  subcategories: SubcategoryReducerType[];
}

export function subcategoriesReducer(
  state: SubcategoriesReducerType,
  action: SubcategoriesActions,
) {
  switch (action.type) {
    case SubcategoriesActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.subcategories.push(action.payload.data);
      });
    case SubcategoriesActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.subcategories.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.subcategories.splice(findIndex, 1);
        }
      });
    case SubcategoriesActionTypes.LIST:
      return produce(state, function (draft) {
        draft.subcategories;
      });
    case SubcategoriesActionTypes.FIND:
    // implement
    case SubcategoriesActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.subcategories.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.subcategories[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
