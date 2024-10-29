import { TicketReducerType } from "./reducer";

export enum TicketsActionTypes {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  FIND = "FIND",
  LIST = "LIST",
  DELETE = "DELETE",
}

export type TicketsActions = {
  type:
    | TicketsActionTypes.CREATE
    | TicketsActionTypes.DELETE
    | TicketsActionTypes.LIST
    | TicketsActionTypes.FIND
    | TicketsActionTypes.UPDATE,
  payload: {
    data: TicketReducerType;
  };
};

export function createTicketsAction(data: TicketReducerType) {
  return {
    type: TicketsActionTypes.CREATE,
    payload: {
      data,
    },
  };
}

export function updateTicketsAction(data: TicketReducerType) {
  return {
    type: TicketsActionTypes.UPDATE,
    payload: {
      data,
    },
  };
}

export function findTicketsAction(data: TicketReducerType) {
  return {
    type: TicketsActionTypes.FIND,
    payload: {
      data,
    },
  };
}

export function listTicketsAction(data: TicketReducerType) {
  return {
    type: TicketsActionTypes.LIST,
    payload: {
      data,
    },
  };
}

export function deleteTicketsAction(data: TicketReducerType) {
  return {
    type: TicketsActionTypes.DELETE,
    payload: {
      data,
    },
  };
}
