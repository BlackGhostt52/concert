import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  OrderReducerType,
  OrdersReducerType,
  ordersReducer,
} from "../reducers/orders/reducer";
import {
  createOrdersAction,
  deleteOrdersAction,
  listOrdersAction,
  findOrdersAction,
  updateOrdersAction,
} from "../reducers/orders/actions";

export interface OrdersContextTypes {
  ordersState: OrdersReducerType;
  createOrders(data: OrderReducerType): void;
  updateOrders(data: OrderReducerType): void;
  findOrders(data: OrderReducerType): void;
  listOrders(data: OrderReducerType): void;
  deleteOrders(data: OrderReducerType): void;
}

export const OrdersContext = createContext<OrdersContextTypes>(
  {} as OrdersContextTypes,
);

interface OrdersProviderProps {
  children: ReactNode;
}

export function OrdersProvider({ children }: OrdersProviderProps) {
  const [ordersState, ordersDispatcher] = useReducer(ordersReducer, {
    orders: [],
  });

  function createOrders(data: OrderReducerType) {
    ordersDispatcher(createOrdersAction(data));
  }

  function updateOrders(data: OrderReducerType) {
    ordersDispatcher(updateOrdersAction(data));
  }

  function findOrders(data: OrderReducerType) {
    ordersDispatcher(findOrdersAction(data));
  }

  function listOrders(data: OrderReducerType) {
    ordersDispatcher(listOrdersAction(data));
  }

  function deleteOrders(data: OrderReducerType) {
    ordersDispatcher(deleteOrdersAction(data));
  }

  return (
    <OrdersContext.Provider
      value={{
        ordersState,
        createOrders,
        updateOrders,
        listOrders,
        deleteOrders,
        findOrders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

export const useOrdersContext = function () {
  const context = useContextSelector(OrdersContext, (context) => {
    return context;
  });

  ;

  if (!context)
    throw new Error(
      "useOrdersContext must be used within OrdersProvider",
    );
  return context;
};
