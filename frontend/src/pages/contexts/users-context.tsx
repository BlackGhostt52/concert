import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  UserReducerType,
  UsersReducerType,
  usersReducer,
} from "../reducers/users/reducer";
import {
  createUsersAction,
  deleteUsersAction,
  listUsersAction,
  findUsersAction,
  updateUsersAction,
} from "../reducers/users/actions";

export interface UsersContextTypes {
  usersState: UsersReducerType;
  createUsers(data: UserReducerType): void;
  updateUsers(data: UserReducerType): void;
  findUsers(data: UserReducerType): void;
  listUsers(data: UserReducerType): void;
  deleteUsers(data: UserReducerType): void;
}

export const UsersContext = createContext<UsersContextTypes>(
  {} as UsersContextTypes,
);

interface UsersProviderProps {
  children: ReactNode;
}

export function UsersProvider({ children }: UsersProviderProps) {
  const [usersState, usersDispatcher] = useReducer(usersReducer, {
    users: [],
  });

  function createUsers(data: UserReducerType) {
    usersDispatcher(createUsersAction(data));
  }

  function updateUsers(data: UserReducerType) {
    usersDispatcher(updateUsersAction(data));
  }

  function findUsers(data: UserReducerType) {
    usersDispatcher(findUsersAction(data));
  }

  function listUsers(data: UserReducerType) {
    usersDispatcher(listUsersAction(data));
  }

  function deleteUsers(data: UserReducerType) {
    usersDispatcher(deleteUsersAction(data));
  }

  return (
    <UsersContext.Provider
      value={{
        usersState,
        createUsers,
        updateUsers,
        listUsers,
        deleteUsers,
        findUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export const useUsersContext = function () {
  const context = useContextSelector(UsersContext, (context) => {
    return context;
  });

  ;

  if (!context)
    throw new Error(
      "useUsersContext must be used within UsersProvider",
    );
  return context;
};
