import { api } from "@/lib/axios";

interface CategoryBody {
  id: number;
  name: string;
  description: string;
}

interface CategoryResponse {
  data: CategoryBody[];
}

export async function createCategoriesController(
  categories: Partial<CategoryBody>,
) {
  const response = await api.post<CategoryResponse>("/categories", {
    categories,
  });

  return response.data;
}
