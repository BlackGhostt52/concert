import { api } from "@/lib/axios";

interface SubcategoryBody {
  id: number;
  description: string;
  idCategory: number;
}

interface SubcategoryResponse {
  data: SubcategoryBody[];
}

export async function createSubcategoriesController(
  subcategories: Partial<SubcategoryBody>,
) {
  const response = await api.post<SubcategoryResponse>("/subcategories", {
    subcategories,
  });

  return response.data;
}
