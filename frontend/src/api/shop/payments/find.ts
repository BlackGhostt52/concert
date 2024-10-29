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

export async function findPaymentsController(param: string | number | null) {
  const response = await api.get<PaymentResponse>("/payments", {
    params: {
      param,
    },
  });

  return response.data;
}
