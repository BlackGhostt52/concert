import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  VariationValueReducerType,
  VariationValuesReducerType,
  variationValuesReducer,
} from "../reducers/variation-values/reducer";
import {
  createVariationValuesAction,
  deleteVariationValuesAction,
  listVariationValuesAction,
  findVariationValuesAction,
  updateVariationValuesAction,
} from "../reducers/variation-values/actions";

export interface VariationValuesContextTypes {
  variationValuesState: VariationValuesReducerType;
  createVariationValues(data: VariationValueReducerType): void;
  updateVariationValues(data: VariationValueReducerType): void;
  findVariationValues(data: VariationValueReducerType): void;
  listVariationValues(data: VariationValueReducerType): void;
  deleteVariationValues(data: VariationValueReducerType): void;
}

export const VariationValuesContext = createContext<VariationValuesContextTypes>(
  {} as VariationValuesContextTypes,
);

interface VariationValuesProviderProps {
  children: ReactNode;
}

export function VariationValuesProvider({ children }: VariationValuesProviderProps) {
  const [variationValuesState, variationValuesDispatcher] = useReducer(variationValuesReducer, {
    variationValues: [],
  });

  function createVariationValues(data: VariationValueReducerType) {
    variationValuesDispatcher(createVariationValuesAction(data));
  }

  function updateVariationValues(data: VariationValueReducerType) {
    variationValuesDispatcher(updateVariationValuesAction(data));
  }

  function findVariationValues(data: VariationValueReducerType) {
    variationValuesDispatcher(findVariationValuesAction(data));
  }

  function listVariationValues(data: VariationValueReducerType) {
    variationValuesDispatcher(listVariationValuesAction(data));
  }

  function deleteVariationValues(data: VariationValueReducerType) {
    variationValuesDispatcher(deleteVariationValuesAction(data));
  }

  return (
    <VariationValuesContext.Provider
      value={{
        variationValuesState,
        createVariationValues,
        updateVariationValues,
        listVariationValues,
        deleteVariationValues,
        findVariationValues,
      }}
    >
      {children}
    </VariationValuesContext.Provider>
  );
}

export const useVariationValuesContext = function () {
  const context = useContextSelector(VariationValuesContext, (context) => {
    return context;
  });

  ;

  if (!context)
    throw new Error(
      "useVariationValuesContext must be used within VariationValuesProvider",
    );
  return context;
};
