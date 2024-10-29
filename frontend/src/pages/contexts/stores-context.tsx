import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  StoreReducerType,
  StoresReducerType,
  storesReducer,
} from "../reducers/stores/reducer";
import {
  createStoresAction,
  deleteStoresAction,
  listStoresAction,
  findStoresAction,
  updateStoresAction,
} from "../reducers/stores/actions";

export interface StoresContextTypes {
  storesState: StoresReducerType;
  createStores(data: StoreReducerType): void;
  updateStores(data: StoreReducerType): void;
  findStores(data: StoreReducerType): void;
  listStores(data: StoreReducerType): void;
  deleteStores(data: StoreReducerType): void;
}

export const StoresContext = createContext<StoresContextTypes>(
  {} as StoresContextTypes,
);

interface StoresProviderProps {
  children: ReactNode;
}

export function StoresProvider({ children }: StoresProviderProps) {
  const [storesState, storesDispatcher] = useReducer(storesReducer, {
    stores: [],
  });

  function createStores(data: StoreReducerType) {
    storesDispatcher(createStoresAction(data));
  }

  function updateStores(data: StoreReducerType) {
    storesDispatcher(updateStoresAction(data));
  }

  function findStores(data: StoreReducerType) {
    storesDispatcher(findStoresAction(data));
  }

  function listStores(data: StoreReducerType) {
    storesDispatcher(listStoresAction(data));
  }

  function deleteStores(data: StoreReducerType) {
    storesDispatcher(deleteStoresAction(data));
  }

  return (
    <StoresContext.Provider
      value={{
        storesState,
        createStores,
        updateStores,
        listStores,
        deleteStores,
        findStores,
      }}
    >
      {children}
    </StoresContext.Provider>
  );
}

export const useStoresContext = function () {
  const context = useContextSelector(StoresContext, (context) => {
    return context;
  });

  ;

  if (!context)
    throw new Error(
      "useStoresContext must be used within StoresProvider",
    );
  return context;
};
