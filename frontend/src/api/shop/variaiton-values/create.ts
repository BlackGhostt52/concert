import { api } from "@/lib/axios";

interface VariationValueBody {
  id: number;
  value: string;
  idVariationDescription: number;
}

interface VariationValuesResponse {
  data: VariationValueBody[];
}

export async function createVariationValuesController(
  variationValues: Partial<VariationValueBody>,
) {
  const response = await api.post<VariationValuesResponse>("/variationvalues", {
    variationValues,
  });

  return response.data;
}
