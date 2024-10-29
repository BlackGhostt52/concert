import { CategoriesActions, CategoriesActionTypes } from "./actions";

import { produce } from "immer";

export interface CategoryReducerType {
  id: number;
  name: string;
  description: string;
}

export interface CategoriesReducerType {
  categories: CategoryReducerType[];
}

export function categoriesReducer(
  state: CategoriesReducerType,
  action: CategoriesActions,
) {
  switch (action.type) {
    case CategoriesActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.categories.push(action.payload.data);
      });
    case CategoriesActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.categories.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.categories.splice(findIndex, 1);
        }
      });
    case CategoriesActionTypes.LIST:
      return produce(state, function (draft) {
        draft.categories;
      });
    case CategoriesActionTypes.FIND:
    // implement
    case CategoriesActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.categories.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.categories[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
