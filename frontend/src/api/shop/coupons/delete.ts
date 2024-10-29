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

export async function deleteCouponsController(coupons: Partial<CouponBody>) {
  const response = await api.delete<CouponResponse>("/coupons", {
    data: coupons,
  });

  return response.data;
}
