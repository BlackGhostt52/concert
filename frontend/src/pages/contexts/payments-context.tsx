import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  PaymentReducerType,
  PaymentsReducerType,
  paymentsReducer,
} from "../reducers/payments/reducer";
import {
  createPaymentsAction,
  deletePaymentsAction,
  listPaymentsAction,
  findPaymentsAction,
  updatePaymentsAction,
} from "../reducers/payments/actions";

export interface PaymentsContextTypes {
  paymentsState: PaymentsReducerType;
  createPayments(data: PaymentReducerType): void;
  updatePayments(data: PaymentReducerType): void;
  findPayments(data: PaymentReducerType): void;
  listPayments(data: PaymentReducerType): void;
  deletePayments(data: PaymentReducerType): void;
}

export const PaymentsContext = createContext<PaymentsContextTypes>(
  {} as PaymentsContextTypes,
);

interface PaymentsProviderProps {
  children: ReactNode;
}

export function PaymentsProvider({ children }: PaymentsProviderProps) {
  const [paymentsState, paymentsDispatcher] = useReducer(paymentsReducer, {
    payments: [],
  });

  function createPayments(data: PaymentReducerType) {
    paymentsDispatcher(createPaymentsAction(data));
  }

  function updatePayments(data: PaymentReducerType) {
    paymentsDispatcher(updatePaymentsAction(data));
  }

  function findPayments(data: PaymentReducerType) {
    paymentsDispatcher(findPaymentsAction(data));
  }

  function listPayments(data: PaymentReducerType) {
    paymentsDispatcher(listPaymentsAction(data));
  }

  function deletePayments(data: PaymentReducerType) {
    paymentsDispatcher(deletePaymentsAction(data));
  }

  return (
    <PaymentsContext.Provider
      value={{
        paymentsState,
        createPayments,
        updatePayments,
        listPayments,
        deletePayments,
        findPayments,
      }}
    >
      {children}
    </PaymentsContext.Provider>
  );
}

export const usePaymentsContext = function () {
  const context = useContextSelector(PaymentsContext, (context) => {
    return context;
  });

  ;

  if (!context)
    throw new Error(
      "usePaymentsContext must be used within PaymentsProvider",
    );
  return context;
};
