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

export async function listOrdersController() {
  const response = await api.get<OrderResponse>("/order");

  return response.data;
}
