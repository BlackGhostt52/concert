import { api } from "@/lib/axios";

interface CategoryBody {
  id: number;
  name: string;
  description: string;
}

interface CategoryResponse {
  data: CategoryBody[];
}

export async function findCategoriesController(param: string | number | null) {
  const response = await api.get<CategoryResponse>("/categories", {
    params: {
      param,
    },
  });

  return response.data;
}
