import { ReactNode } from "react";
import { createContext } from "use-context-selector";
import { ProductsContextTypes, useProductsContext } from "./products-context";
import { AddressesContextTypes, useAddressesContext } from "./addresses-context";
import { ByproductsContextTypes, useByproductsContext } from "./byproducts-context";
import { CategoriesContextTypes, useCategoriesContext } from "./categories-context";
import { CouponsContextTypes, useCouponsContext } from "./coupons-context";
import { OrderItemsContextTypes, useOrderItemsContext } from "./order-items-context";
import { OrdersContextTypes, useOrdersContext } from "./orders-context";
import { PaymentsContextTypes, usePaymentsContext } from "./payments-context";
import { StoresContextTypes, useStoresContext } from "./stores-context";
import { SubcategoriesContextTypes, useSubcategoriesContext } from "./subcategories-context";
import { TicketsContextTypes, useTicketsContext } from "./tickets-context";
import { UsersContextTypes, useUsersContext } from "./users-context";
import { UserTypesContextTypes, useUserTypesContext } from "./user-types-context";
import { useVariationDescriptionsContext, VariationDescriptionsContextTypes } from "./variation-descriptions-context";
import { useVariationValuesContext, VariationValuesContextTypes } from "./variation-values-context";

interface GlobalContextTypes {
    productsContext: ProductsContextTypes;
    addressesContext: AddressesContextTypes;
    byproductsContext: ByproductsContextTypes;
    categoriesContext: CategoriesContextTypes;
    couponsContext: CouponsContextTypes;
    orderItemsContext: OrderItemsContextTypes;
    ordersContext: OrdersContextTypes;
    paymentsContext: PaymentsContextTypes;
    storesContext: StoresContextTypes;
    subcategoriesContext: SubcategoriesContextTypes;
    ticketsContext: TicketsContextTypes;
    usersContext: UsersContextTypes;
    userTypesContext: UserTypesContextTypes;
    variationDescriptionsContext: VariationDescriptionsContextTypes;
    variationValuesContext: VariationValuesContextTypes;
}

export const GlobalContext = createContext<GlobalContextTypes>({} as GlobalContextTypes);

interface GlobalProviderProps {
    children: ReactNode
}

export function GlobalProvider({ children }: GlobalProviderProps) {
    const productsContext = useProductsContext();
    const addressesContext = useAddressesContext();
    const byproductsContext = useByproductsContext();
    const categoriesContext = useCategoriesContext();
    const couponsContext = useCouponsContext();
    const orderItemsContext = useOrderItemsContext();
    const ordersContext = useOrdersContext();
    const paymentsContext = usePaymentsContext();
    const storesContext = useStoresContext();
    const subcategoriesContext = useSubcategoriesContext();
    const ticketsContext = useTicketsContext();
    const usersContext = useUsersContext();
    const userTypesContext = useUserTypesContext();
    const variationDescriptionsContext = useVariationDescriptionsContext();
    const variationValuesContext = useVariationValuesContext();

    return (
        <GlobalContext.Provider value={{
            addressesContext,
            byproductsContext,
            categoriesContext,
            couponsContext,
            orderItemsContext,
            ordersContext,
            paymentsContext,
            productsContext,
            storesContext,
            subcategoriesContext,
            ticketsContext,
            usersContext,
            userTypesContext,
            variationDescriptionsContext,
            variationValuesContext
        }}>
            { children }
        </GlobalContext.Provider>
    )
}