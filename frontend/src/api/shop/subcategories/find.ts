import { api } from "@/lib/axios";

interface SubcategoryBody {
  id: number;
  description: string;
  idCategory: number;
}

interface SubcategoryResponse {
  data: SubcategoryBody[];
}

export async function findSubcategoriesController(
  param: string | number | null,
) {
  const response = await api.get<SubcategoryResponse>("/subcategories", {
    params: {
      param,
    },
  });

  return response.data;
}
