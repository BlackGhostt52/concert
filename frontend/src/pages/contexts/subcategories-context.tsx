import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  SubcategoryReducerType,
  SubcategoriesReducerType,
  subcategoriesReducer,
} from "../reducers/subcategories/reducer";
import {
  createSubcategoriesAction,
  deleteSubcategoriesAction,
  listSubcategoriesAction,
  findSubcategoriesAction,
  updateSubcategoriesAction,
} from "../reducers/subcategories/actions";

export interface SubcategoriesContextTypes {
  subcategoriesState: SubcategoriesReducerType;
  createSubcategories(data: SubcategoryReducerType): void;
  updateSubcategories(data: SubcategoryReducerType): void;
  findSubcategories(data: SubcategoryReducerType): void;
  listSubcategories(data: SubcategoryReducerType): void;
  deleteSubcategories(data: SubcategoryReducerType): void;
}

export const SubcategoriesContext = createContext<SubcategoriesContextTypes>(
  {} as SubcategoriesContextTypes,
);

interface SubcategoriesProviderProps {
  children: ReactNode;
}

export function SubcategoriesProvider({ children }: SubcategoriesProviderProps) {
  const [subcategoriesState, subcategoriesDispatcher] = useReducer(subcategoriesReducer, {
    subcategories: [],
  });

  function createSubcategories(data: SubcategoryReducerType) {
    subcategoriesDispatcher(createSubcategoriesAction(data));
  }

  function updateSubcategories(data: SubcategoryReducerType) {
    subcategoriesDispatcher(updateSubcategoriesAction(data));
  }

  function findSubcategories(data: SubcategoryReducerType) {
    subcategoriesDispatcher(findSubcategoriesAction(data));
  }

  function listSubcategories(data: SubcategoryReducerType) {
    subcategoriesDispatcher(listSubcategoriesAction(data));
  }

  function deleteSubcategories(data: SubcategoryReducerType) {
    subcategoriesDispatcher(deleteSubcategoriesAction(data));
  }

  return (
    <SubcategoriesContext.Provider
      value={{
        subcategoriesState,
        createSubcategories,
        updateSubcategories,
        listSubcategories,
        deleteSubcategories,
        findSubcategories,
      }}
    >
      {children}
    </SubcategoriesContext.Provider>
  );
}

export const useSubcategoriesContext = function () {
  const context = useContextSelector(SubcategoriesContext, (context) => {
    return context;
  });

  ;

  if (!context)
    throw new Error(
      "useSubcategoriesContext must be used within SubcategoriesProvider",
    );
  return context;
};
