import { PaymentsActions, PaymentsActionTypes } from "./actions";

import { produce } from "immer";

export interface PaymentReducerType {
  id: number;
  date: Date;
  value: number;
  operation: number;
  status: number;
  idOrder: number;
}

export interface PaymentsReducerType {
  payments: PaymentReducerType[];
}

export function paymentsReducer(
  state: PaymentsReducerType,
  action: PaymentsActions,
) {
  switch (action.type) {
    case PaymentsActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.payments.push(action.payload.data);
      });
    case PaymentsActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.payments.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.payments.splice(findIndex, 1);
        }
      });
    case PaymentsActionTypes.LIST:
      return produce(state, function (draft) {
        draft.payments;
      });
    case PaymentsActionTypes.FIND:
    // implement
    case PaymentsActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.payments.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.payments[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
