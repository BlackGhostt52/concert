import { api } from "@/lib/axios";

interface VariationDescriptionBody {
  id: number;
  description: string;
}

interface VariationDescriptionResponse {
  data: VariationDescriptionBody[];
}

export async function listVariationDescriptionsController() {
  const response = await api.get<VariationDescriptionResponse>(
    "/variationdescriptions",
  );

  return response.data;
}
