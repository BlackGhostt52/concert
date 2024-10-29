import { api } from "@/lib/axios";

interface UserTypeBody {
  id: number;
  description: string;
}

interface UserTypeResponse {
  data: UserTypeBody[];
}

export async function updateUserTypesController(
  usertypes: Partial<UserTypeBody>,
) {
  const response = await api.patch<UserTypeResponse>("/usertypes", {
    usertypes,
  });

  return response.data;
}
