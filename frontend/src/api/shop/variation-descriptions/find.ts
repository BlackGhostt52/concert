import { api } from "@/lib/axios";

interface VariationDescriptionBody {
  id: number;
  description: string;
}

interface VariationDescriptionResponse {
  data: VariationDescriptionBody[];
}

export async function findVariationDescriptionsController(
  param: string | number | null,
) {
  const response = await api.get<VariationDescriptionResponse>(
    "/variationdescriptions",
    {
      params: {
        param,
      },
    },
  );

  return response.data;
}
