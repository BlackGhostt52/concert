import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  TicketReducerType,
  TicketsReducerType,
  ticketsReducer,
} from "../reducers/tickets/reducer";
import {
  createTicketsAction,
  deleteTicketsAction,
  listTicketsAction,
  findTicketsAction,
  updateTicketsAction,
} from "../reducers/tickets/actions";

export interface TicketsContextTypes {
  ticketsState: TicketsReducerType;
  createTickets(data: TicketReducerType): void;
  updateTickets(data: TicketReducerType): void;
  findTickets(data: TicketReducerType): void;
  listTickets(data: TicketReducerType): void;
  deleteTickets(data: TicketReducerType): void;
}

export const TicketsContext = createContext<TicketsContextTypes>(
  {} as TicketsContextTypes,
);

interface TicketsProviderProps {
  children: ReactNode;
}

export function TicketsProvider({ children }: TicketsProviderProps) {
  const [ticketsState, ticketsDispatcher] = useReducer(ticketsReducer, {
    tickets: [],
  });

  function createTickets(data: TicketReducerType) {
    ticketsDispatcher(createTicketsAction(data));
  }

  function updateTickets(data: TicketReducerType) {
    ticketsDispatcher(updateTicketsAction(data));
  }

  function findTickets(data: TicketReducerType) {
    ticketsDispatcher(findTicketsAction(data));
  }

  function listTickets(data: TicketReducerType) {
    ticketsDispatcher(listTicketsAction(data));
  }

  function deleteTickets(data: TicketReducerType) {
    ticketsDispatcher(deleteTicketsAction(data));
  }

  return (
    <TicketsContext.Provider
      value={{
        ticketsState,
        createTickets,
        updateTickets,
        listTickets,
        deleteTickets,
        findTickets,
      }}
    >
      {children}
    </TicketsContext.Provider>
  );
}

export const useTicketsContext = function () {
  const context = useContextSelector(TicketsContext, (context) => {
    return context;
  });

  ;

  if (!context)
    throw new Error(
      "useTicketsContext must be used within TicketsProvider",
    );
  return context;
};
