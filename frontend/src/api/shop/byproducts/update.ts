import { api } from "@/lib/axios";

interface ByproductBody {
  id: number;
  idProduct: number;
  idSubcategory: number;
}

interface ByproductResponse {
  data: ByproductBody[];
}

export async function updateByproductsController(
  byproducts: Partial<ByproductBody>,
) {
  const response = await api.patch<ByproductResponse>("/byproducts", {
    byproducts,
  });

  return response.data;
}
