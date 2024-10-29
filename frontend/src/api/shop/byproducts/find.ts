import { api } from "@/lib/axios";

interface ByproductBody {
  id: number;
  idProduct: number;
  idSubcategory: number;
}

interface ByproductResponse {
  data: ByproductBody[];
}

export async function findByproductsController(param: string | number | null) {
  const response = await api.get<ByproductResponse>("/byproducts", {
    params: {
      param,
    },
  });

  return response.data;
}
