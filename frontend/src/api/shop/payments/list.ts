import { api } from "@/lib/axios";

interface PaymentBody {
  id: number;
  date: Date;
  value: number;
  operation: number;
  status: number;
  idOrder: number;
}

interface PaymentResponse {
  data: PaymentBody[];
}

export async function listPaymentsController() {
  const response = await api.get<PaymentResponse>("/payments");

  return response.data;
}
