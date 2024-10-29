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

export async function updatePaymentsController(payments: Partial<PaymentBody>) {
  const response = await api.patch<PaymentResponse>("/payments", { payments });

  return response.data;
}
