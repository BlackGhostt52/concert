import { api } from "@/lib/axios";

interface OrderBody {
  id: number;
  totalValue: number;
  date: Date;
  status: number;
  finalValue: number;
  discount: number;
  idUser: number;
}

interface OrderResponse {
  data: OrderBody[];
}

export async function deleteOrdersController(order: Partial<OrderBody>) {
  const response = await api.delete<OrderResponse>("/order", { data: order });

  return response.data;
}
