import { api } from "@/lib/axios";

interface VariationValueBody {
  id: number;
  value: string;
  idVariationDescription: number;
}

interface VariationValuesResponse {
  data: VariationValueBody[];
}

export async function listVariationValuesController() {
  const response = await api.get<VariationValuesResponse>("/variationvalues");

  return response.data;
}
