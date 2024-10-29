import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  ByproductReducerType,
  ByproductsReducerType,
  byproductsReducer,
} from "../reducers/byproducts/reducer";
import {
  createByproductsAction,
  deleteByproductsAction,
  listByproductsAction,
  findByproductsAction,
  updateByproductsAction,
} from "../reducers/byproducts/actions";

export interface ByproductsContextTypes {
  byproductsState: ByproductsReducerType;
  createByproducts(data: ByproductReducerType): void;
  updateByproducts(data: ByproductReducerType): void;
  findByproducts(data: ByproductReducerType): void;
  listByproducts(data: ByproductReducerType): void;
  deleteByproducts(data: ByproductReducerType): void;
}

export const ByproductsContext = createContext<ByproductsContextTypes>(
  {} as ByproductsContextTypes,
);

interface ByproductsProviderProps {
  children: ReactNode;
}

export function ByproductsProvider({ children }: ByproductsProviderProps) {
  const [byproductsState, byproductsDispatcher] = useReducer(
    byproductsReducer,
    {
      byproducts: [],
    },
  );

  function createByproducts(data: ByproductReducerType) {
    byproductsDispatcher(createByproductsAction(data));
  }

  function updateByproducts(data: ByproductReducerType) {
    byproductsDispatcher(updateByproductsAction(data));
  }

  function findByproducts(data: ByproductReducerType) {
    byproductsDispatcher(findByproductsAction(data));
  }

  function listByproducts(data: ByproductReducerType) {
    byproductsDispatcher(listByproductsAction(data));
  }

  function deleteByproducts(data: ByproductReducerType) {
    byproductsDispatcher(deleteByproductsAction(data));
  }

  return (
    <ByproductsContext.Provider
      value={{
        byproductsState,
        createByproducts,
        updateByproducts,
        listByproducts,
        deleteByproducts,
        findByproducts,
      }}
    >
      {children}
    </ByproductsContext.Provider>
  );
}

export const useByproductsContext = function () {
  const context = useContextSelector(ByproductsContext, (context) => {
    return context;
  });

  ;

  if (!context)
    throw new Error(
      "useByproductsContext must be used within ByproductsProvider",
    );
  return context;
};
