import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  ProductReducerType,
  ProductsReducerType,
  productsReducer,
} from "../reducers/products/reducer";
import {
  createProductsAction,
  deleteProductsAction,
  listProductsAction,
  findProductsAction,
  updateProductsAction,
} from "../reducers/products/actions";

export interface ProductsContextTypes {
  productsState: ProductsReducerType;
  createProducts(data: ProductReducerType): void;
  updateProducts(data: ProductReducerType): void;
  findProducts(data: ProductReducerType): void;
  listProducts(data: ProductReducerType): void;
  deleteProducts(data: ProductReducerType): void;
}

export const ProductsContext = createContext<ProductsContextTypes>(
  {} as ProductsContextTypes,
);

interface ProductsProviderProps {
  children: ReactNode;
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [productsState, productsDispatcher] = useReducer(productsReducer, {
    products: [],
  });

  function createProducts(data: ProductReducerType) {
    productsDispatcher(createProductsAction(data));
  }

  function updateProducts(data: ProductReducerType) {
    productsDispatcher(updateProductsAction(data));
  }

  function findProducts(data: ProductReducerType) {
    productsDispatcher(findProductsAction(data));
  }

  function listProducts(data: ProductReducerType) {
    productsDispatcher(listProductsAction(data));
  }

  function deleteProducts(data: ProductReducerType) {
    productsDispatcher(deleteProductsAction(data));
  }

  return (
    <ProductsContext.Provider
      value={{
        productsState,
        createProducts,
        updateProducts,
        listProducts,
        deleteProducts,
        findProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = function () {
  const context = useContextSelector(ProductsContext, (context) => {
    return context;
  });

  ;

  if (!context)
    throw new Error(
      "useProductsContext must be used within ProductsProvider",
    );
  return context;
};
