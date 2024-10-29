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

export async function updateProductsController(products: Partial<ProductBody>) {
  const response = await api.patch<ProductResponse>("/products", { products });

  return response.data;
}
