import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  UserTypeReducerType,
  UserTypesReducerType,
  userTypesReducer,
} from "../reducers/user-types/reducer";
import {
  createUserTypesAction,
  deleteUserTypesAction,
  listUserTypesAction,
  findUserTypesAction,
  updateUserTypesAction,
} from "../reducers/user-types/actions";

export interface UserTypesContextTypes {
  userTypesState: UserTypesReducerType;
  createUserTypes(data: UserTypeReducerType): void;
  updateUserTypes(data: UserTypeReducerType): void;
  findUserTypes(data: UserTypeReducerType): void;
  listUserTypes(data: UserTypeReducerType): void;
  deleteUserTypes(data: UserTypeReducerType): void;
}

export const UserTypesContext = createContext<UserTypesContextTypes>(
  {} as UserTypesContextTypes,
);

interface UserTypesProviderProps {
  children: ReactNode;
}

export function UserTypesProvider({ children }: UserTypesProviderProps) {
  const [userTypesState, userTypesDispatcher] = useReducer(userTypesReducer, {
    userTypes: [],
  });

  function createUserTypes(data: UserTypeReducerType) {
    userTypesDispatcher(createUserTypesAction(data));
  }

  function updateUserTypes(data: UserTypeReducerType) {
    userTypesDispatcher(updateUserTypesAction(data));
  }

  function findUserTypes(data: UserTypeReducerType) {
    userTypesDispatcher(findUserTypesAction(data));
  }

  function listUserTypes(data: UserTypeReducerType) {
    userTypesDispatcher(listUserTypesAction(data));
  }

  function deleteUserTypes(data: UserTypeReducerType) {
    userTypesDispatcher(deleteUserTypesAction(data));
  }

  return (
    <UserTypesContext.Provider
      value={{
        userTypesState,
        createUserTypes,
        updateUserTypes,
        listUserTypes,
        deleteUserTypes,
        findUserTypes,
      }}
    >
      {children}
    </UserTypesContext.Provider>
  );
}

export const useUserTypesContext = function () {
  const context = useContextSelector(UserTypesContext, (context) => {
    return context;
  });

  ;

  if (!context)
    throw new Error(
      "useUserTypesContext must be used within UserTypesProvider",
    );
  return context;
};
