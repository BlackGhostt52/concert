import { api } from "@/lib/axios";

interface VariationValueBody {
  id: number;
  value: string;
  idVariationDescription: number;
}

interface VariationValuesResponse {
  data: VariationValueBody[];
}

export async function findVariationValuesController(
  param: string | number | null,
) {
  const response = await api.get<VariationValuesResponse>("/variationvalues", {
    params: {
      param,
    },
  });

  return response.data;
}
