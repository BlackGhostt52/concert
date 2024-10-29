import {
  VariationDescriptionsActions,
  VariationDescriptionsActionTypes,
} from "./actions";

import { produce } from "immer";

export interface VariationDescriptionReducerType {
  id: number;
  description: string;
}

export interface VariationDescriptionsReducerType {
  variationDescriptions: VariationDescriptionReducerType[];
}

export function variationDescriptionsReducer(
  state: VariationDescriptionsReducerType,
  action: VariationDescriptionsActions,
) {
  switch (action.type) {
    case VariationDescriptionsActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.variationDescriptions.push(action.payload.data);
      });
    case VariationDescriptionsActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.variationDescriptions.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.variationDescriptions.splice(findIndex, 1);
        }
      });
    case VariationDescriptionsActionTypes.LIST:
      return produce(state, function (draft) {
        draft.variationDescriptions;
      });
    case VariationDescriptionsActionTypes.FIND:
    // implement
    case VariationDescriptionsActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.variationDescriptions.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.variationDescriptions[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
