import { api } from "@/lib/axios";

interface OrderItemBody {
  id: number;
  quantityOrdered: number;
  quantityServed: number;
  itemValue: number;
  idProduct: number;
}

interface OrderItemResponse {
  data: OrderItemBody[];
}

export async function listOrderItemsController() {
  const response = await api.get<OrderItemResponse>("/orderitems");

  return response.data;
}
