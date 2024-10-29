import { api } from "@/lib/axios";

interface CategoryBody {
  id: number;
  name: string;
  description: string;
}

interface CategoryResponse {
  data: CategoryBody[];
}

export async function deleteCategoriesController(
  categories: Partial<CategoryBody>,
) {
  const response = await api.delete<CategoryResponse>("/categories", {
    data: categories,
  });

  return response.data;
}
