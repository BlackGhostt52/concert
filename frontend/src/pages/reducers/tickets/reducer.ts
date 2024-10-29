import { TicketsActions, TicketsActionTypes } from "./actions";

import { produce } from "immer";

export interface TicketReducerType {
  id: number;
  title: string;
  description: string;

  createdAt: Date;
  updatedAt: Date;
  idUser: number;
}

export interface TicketsReducerType {
  tickets: TicketReducerType[];
}

export function ticketsReducer(
  state: TicketsReducerType,
  action: TicketsActions,
) {
  switch (action.type) {
    case TicketsActionTypes.CREATE:
      return produce(state, function (draft) {
        draft.tickets.push(action.payload.data);
      });
    case TicketsActionTypes.DELETE:
      return produce(state, function (draft) {
        const findIndex = draft.tickets.findIndex(
          (index) => index.id === action.payload.data.id,
        );

        if (findIndex !== -1) {
          draft.tickets.splice(findIndex, 1);
        }
      });
    case TicketsActionTypes.LIST:
      return produce(state, function (draft) {
        draft.tickets;
      });
    case TicketsActionTypes.FIND:
    // implement
    case TicketsActionTypes.UPDATE:
      return produce(state, function (draft) {
        const findIndex = draft.tickets.findIndex((orderItem) => {
          orderItem.id === action.payload.data.id;
        });

        if (findIndex !== -1) {
          draft.tickets[findIndex] = action.payload.data;
        }
      });
    default:
      return state;
  }
}
