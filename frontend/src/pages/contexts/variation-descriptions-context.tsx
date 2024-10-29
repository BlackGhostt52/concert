import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  VariationDescriptionReducerType,
  VariationDescriptionsReducerType,
  variationDescriptionsReducer,
} from "../reducers/variation-descriptions/reducer";
import {
  createVariationDescriptionsAction,
  deleteVariationDescriptionsAction,
  listVariationDescriptionsAction,
  findVariationDescriptionsAction,
  updateVariationDescriptionsAction,
} from "../reducers/variation-descriptions/actions";

export interface VariationDescriptionsContextTypes {
  variationDescriptionsState: VariationDescriptionsReducerType;
  createVariationDescriptions(data: VariationDescriptionReducerType): void;
  updateVariationDescriptions(data: VariationDescriptionReducerType): void;
  findVariationDescriptions(data: VariationDescriptionReducerType): void;
  listVariationDescriptions(data: VariationDescriptionReducerType): void;
  deleteVariationDescriptions(data: VariationDescriptionReducerType): void;
}

export const VariationDescriptionsContext = createContext<VariationDescriptionsContextTypes>(
  {} as VariationDescriptionsContextTypes,
);

interface VariationDescriptionsProviderProps {
  children: ReactNode;
}

export function VariationDescriptionsProvider({ children }: VariationDescriptionsProviderProps) {
  const [variationDescriptionsState, variationDescriptionsDispatcher] = useReducer(variationDescriptionsReducer, {
    variationDescriptions: [],
  });

  function createVariationDescriptions(data: VariationDescriptionReducerType) {
    variationDescriptionsDispatcher(createVariationDescriptionsAction(data));
  }

  function updateVariationDescriptions(data: VariationDescriptionReducerType) {
    variationDescriptionsDispatcher(updateVariationDescriptionsAction(data));
  }

  function findVariationDescriptions(data: VariationDescriptionReducerType) {
    variationDescriptionsDispatcher(findVariationDescriptionsAction(data));
  }

  function listVariationDescriptions(data: VariationDescriptionReducerType) {
    variationDescriptionsDispatcher(listVariationDescriptionsAction(data));
  }

  function deleteVariationDescriptions(data: VariationDescriptionReducerType) {
    variationDescriptionsDispatcher(deleteVariationDescriptionsAction(data));
  }

  return (
    <VariationDescriptionsContext.Provider
      value={{
        variationDescriptionsState,
        createVariationDescriptions,
        updateVariationDescriptions,
        listVariationDescriptions,
        deleteVariationDescriptions,
        findVariationDescriptions,
      }}
    >
      {children}
    </VariationDescriptionsContext.Provider>
  );
}

export const useVariationDescriptionsContext = function () {
  const context = useContextSelector(VariationDescriptionsContext, (context) => {
    return context;
  });

  ;

  if (!context)
    throw new Error(
      "useVariationDescriptionsContext must be used within VariationDescriptionsProvider",
    );
  return context;
};
