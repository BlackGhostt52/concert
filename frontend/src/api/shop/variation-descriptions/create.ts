import { api } from "@/lib/axios";

interface VariationDescriptionBody {
  id: number;
  description: string;
}

interface VariationDescriptionResponse {
  data: VariationDescriptionBody[];
}

export async function createVariationDescriptionsController(
  variationDescriptions: Partial<VariationDescriptionBody>,
) {
  const response = await api.post<VariationDescriptionResponse>(
    "/variationdescriptions",
    { variationDescriptions },
  );

  return response.data;
}
