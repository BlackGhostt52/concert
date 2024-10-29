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

export async function findOrderItemsController(param: string | number | null) {
  const response = await api.get<OrderItemResponse>("/orderitems", {
    params: {
      param,
    },
  });

  return response.data;
}
