import { api } from "@/lib/axios";

interface ProductBody {
  id: number;
  quantity: number;
  value: number;
  model: string;
  bestsellerProduct: boolean;
  idv1: number;
  idv2: number;
  idStore: number;
}

interface ProductResponse {
  data: ProductBody[];
}

export async function findProductsController(param: string | number | null) {
  const response = await api.get<ProductResponse>("/products", {
    params: {
      param,
    },
  });

  return response.data;
}
