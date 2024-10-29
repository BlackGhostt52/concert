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

export async function findCouponsController(param: string | number | null) {
  const response = await api.get<CouponResponse>("/coupons", {
    params: {
      param,
    },
  });

  return response.data;
}
