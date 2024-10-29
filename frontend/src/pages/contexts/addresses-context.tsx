import { ReactNode, useReducer } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  AddressReducerType,
  AddressesReducerType,
  addressesReducer,
} from "../reducers/addresses/reducer";
import {
  createAddressesAction,
  deleteAddressesAction,
  listAddressesAction,
  findAddressesAction,
  updateAddressesAction,
} from "../reducers/addresses/actions";

export interface AddressesContextTypes {
  addressesState: AddressesReducerType;
  createAddresses(data: AddressReducerType): void;
  updateAddresses(data: AddressReducerType): void;
  selectAddresses(data: AddressReducerType): void;
  listAddresses(data: AddressReducerType): void;
  deleteAddresses(data: AddressReducerType): void;
}

export const AddressesContext = createContext<AddressesContextTypes>(
  {} as AddressesContextTypes,
);

interface AddressesProviderProps {
  children: ReactNode;
}

export function AddressesProvider({ children }: AddressesProviderProps) {
  const [addressesState, addressesDispatcher] = useReducer(addressesReducer, {
    addresses: [],
  });

  function createAddresses(data: AddressReducerType) {
    addressesDispatcher(createAddressesAction(data));
  }

  function updateAddresses(data: AddressReducerType) {
    addressesDispatcher(updateAddressesAction(data));
  }

  function selectAddresses(data: AddressReducerType) {
    addressesDispatcher(findAddressesAction(data));
  }

  function listAddresses(data: AddressReducerType) {
    addressesDispatcher(listAddressesAction(data));
  }

  function deleteAddresses(data: AddressReducerType) {
    addressesDispatcher(deleteAddressesAction(data));
  }

  return (
    <AddressesContext.Provider
      value={{
        addressesState,
        createAddresses,
        updateAddresses,
        listAddresses,
        deleteAddresses,
        selectAddresses,
      }}
    >
      {children}
    </AddressesContext.Provider>
  );
}

export const useAddressesContext = function () {
  const context = useContextSelector(AddressesContext, (context) => {
    return context;
  });

  if (!context)
    throw new Error(
      "useAddressesContext must be used within AddressesProvider",
    );
  return context;
};
