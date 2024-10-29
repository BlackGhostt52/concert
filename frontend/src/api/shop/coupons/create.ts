import { api } from "@/lib/axios";

interface CouponBody {
  id: number;
  phraseCode: string;
  discount: number;
  idProduct: number;
}

interface CouponResponse {
  data: CouponBody[];
}

export async function createCouponsController(coupons: Partial<CouponBody>) {
  const response = await api.post<CouponResponse>("/coupons", { coupons });

  return response.data;
}
