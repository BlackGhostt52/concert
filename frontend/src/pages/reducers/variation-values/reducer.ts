import { VariationValuesActions, VariationValuesActionTypes } from "./actions";

import { produce } from "immer";

export interface VariationValueReducerType {
  id: number;
  value: string;
  idVariationDescription: number;
}

export interface VariationValuesReducerType {
  variationValues: VariationValueReducerType[];
}

export function variationValuesReducer(
  state: VariationValuesReducerType,
  action: VariationValuesActions,
) {
  switch (action.type) {
    case VariationValuesActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.variationValues.push(action.payload.data);
      });
    case VariationValuesActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.variationValues.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.variationValues.splice(findIndex, 1);
        }
      });
    case VariationValuesActionTypes.LIST:
      return produce(state, function (draft) {
        draft.variationValues;
      });
    case VariationValuesActionTypes.FIND:
    // implement
    case VariationValuesActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.variationValues.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.variationValues[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
