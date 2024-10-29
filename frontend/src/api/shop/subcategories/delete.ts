import { api } from "@/lib/axios";

interface SubcategoryBody {
  id: number;
  description: string;
  idCategory: number;
}

interface SubcategoryResponse {
  data: SubcategoryBody[];
}

export async function deleteSubcategoriesController(
  subcategories: Partial<SubcategoryBody>,
) {
  const response = await api.delete<SubcategoryResponse>("/subcategories", {
    data: subcategories,
  });

  return response.data;
}
