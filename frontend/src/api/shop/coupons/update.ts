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

export async function updateCouponsController(coupons: Partial<CouponBody>) {
  const response = await api.patch<CouponResponse>("/coupons", { coupons });

  return response.data;
}
