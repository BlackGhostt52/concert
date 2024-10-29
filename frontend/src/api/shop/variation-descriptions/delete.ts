import { api } from "@/lib/axios";

interface VariationDescriptionBody {
  id: number;
  description: string;
}

interface VariationDescriptionResponse {
  data: VariationDescriptionBody[];
}

export async function deleteVariationDescriptionsController(
  variationDescriptions: Partial<VariationDescriptionBody>,
) {
  const response = await api.delete<VariationDescriptionResponse>(
    "/variationdescriptions",
    { data: variationDescriptions },
  );

  return response.data;
}
