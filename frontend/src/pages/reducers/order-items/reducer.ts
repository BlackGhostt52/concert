import { OrderItemsActions, OrderItemsActionTypes } from "./actions";

import { produce } from "immer";

export interface OrderItemReducerType {
  id: number;
  quantityOrdered: number;
  quantityServed: number;
  itemValue: number;
  idProduct: number;
}

export interface OrderItemsReducerType {
  orderItems: OrderItemReducerType[];
}

export function orderItemsReducer(
  state: OrderItemsReducerType,
  action: OrderItemsActions,
) {
  switch (action.type) {
    case OrderItemsActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.orderItems.push(action.payload.data);
      });
    case OrderItemsActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.orderItems.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.orderItems.splice(findIndex, 1);
        }
      });
    case OrderItemsActionTypes.LIST:
      return produce(state, function (draft) {
        draft.orderItems;
      });
    case OrderItemsActionTypes.FIND:
    // implement
    case OrderItemsActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.orderItems.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.orderItems[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
