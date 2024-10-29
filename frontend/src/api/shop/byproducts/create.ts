import { api } from "@/lib/axios";

interface ByproductBody {
  id: number;
  idProduct: number;
  idSubcategory: number;
}

interface ByproductResponse {
  data: ByproductBody[];
}

export async function createByproductsController(
  byproducts: Partial<ByproductBody>,
) {
  const response = await api.post<ByproductResponse>("/byproducts", {
    byproducts,
  });

  return response.data;
}
