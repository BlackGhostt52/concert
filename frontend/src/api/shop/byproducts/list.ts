import { api } from "@/lib/axios";

interface ByproductBody {
  id: number;
  idProduct: number;
  idSubcategory: number;
}

interface ByproductResponse {
  data: ByproductBody[];
}

export async function listByproductsController() {
  const response = await api.get<ByproductResponse>("/byproducts");

  return response.data;
}
