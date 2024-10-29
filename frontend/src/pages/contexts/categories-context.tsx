import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  CategoryReducerType,
  CategoriesReducerType,
  categoriesReducer,
} from "../reducers/categories/reducer";
import {
  createCategoriesAction,
  deleteCategoriesAction,
  listCategoriesAction,
  findCategoriesAction,
  updateCategoriesAction,
} from "../reducers/categories/actions";

export interface CategoriesContextTypes {
  categoriesState: CategoriesReducerType;
  createCategories(data: CategoryReducerType): void;
  updateCategories(data: CategoryReducerType): void;
  findCategories(data: CategoryReducerType): void;
  listCategories(data: CategoryReducerType): void;
  deleteCategories(data: CategoryReducerType): void;
}

export const CategoriesContext = createContext<CategoriesContextTypes>(
  {} as CategoriesContextTypes,
);

interface CategoriesProviderProps {
  children: ReactNode;
}

export function CategoriesProvider({ children }: CategoriesProviderProps) {
  const [categoriesState, categoriesDispatcher] = useReducer(categoriesReducer, {
    categories: [],
  });

  function createCategories(data: CategoryReducerType) {
    categoriesDispatcher(createCategoriesAction(data));
  }

  function updateCategories(data: CategoryReducerType) {
    categoriesDispatcher(updateCategoriesAction(data));
  }

  function findCategories(data: CategoryReducerType) {
    categoriesDispatcher(findCategoriesAction(data));
  }

  function listCategories(data: CategoryReducerType) {
    categoriesDispatcher(listCategoriesAction(data));
  }

  function deleteCategories(data: CategoryReducerType) {
    categoriesDispatcher(deleteCategoriesAction(data));
  }

  return (
    <CategoriesContext.Provider
      value={{
        categoriesState,
        createCategories,
        updateCategories,
        listCategories,
        deleteCategories,
        findCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export const useCategoriesContext = function () {
  const context = useContextSelector(CategoriesContext, (context) => {
    return context;
  });

  ;

  if (!context)
    throw new Error(
      "useCategoriesContext must be used within CategoriesProvider",
    );
  return context;
};
