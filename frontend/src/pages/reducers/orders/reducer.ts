import { OrdersActions, OrdersActionTypes } from "./actions";

import { produce } from "immer";

export interface OrderReducerType {
  id: number;
  totalValue: number;
  date: Date;
  status: number;
  finalValue: number;
  discount: number;
  idUser: number;
}

export interface OrdersReducerType {
  orders: OrderReducerType[];
}

export function ordersReducer(state: OrdersReducerType, action: OrdersActions) {
  switch (action.type) {
    case OrdersActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.orders.push(action.payload.data);
      });
    case OrdersActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.orders.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.orders.splice(findIndex, 1);
        }
      });
    case OrdersActionTypes.LIST:
      return produce(state, function (draft) {
        draft.orders;
      });
    case OrdersActionTypes.FIND:
    // implement
    case OrdersActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.orders.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.orders[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
