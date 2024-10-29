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

export async function updateOrderItemsController(
  orderItems: Partial<OrderItemBody>,
) {
  const response = await api.patch<OrderItemResponse>("/orderitems", {
    orderItems,
  });

  return response.data;
}
