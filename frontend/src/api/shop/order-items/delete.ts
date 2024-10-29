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

export async function deleteOrderItemsController(
  orderItems: Partial<OrderItemBody>,
) {
  const response = await api.delete<OrderItemResponse>("/orderitems", {
    data: orderItems,
  });

  return response.data;
}
