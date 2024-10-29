import { api } from "@/lib/axios";

interface ByproductBody {
  id: number;
  idProduct: number;
  idSubcategory: number;
}

interface ByproductResponse {
  data: ByproductBody[];
}

export async function deleteByproductsController(
  byproducts: Partial<ByproductBody>,
) {
  const response = await api.delete<ByproductResponse>("/byproducts", {
    data: byproducts,
  });

  return response.data;
}
