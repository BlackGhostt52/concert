import { api } from "@/lib/axios";

interface UserTypeBody {
  id: number;
  description: string;
}

interface UserTypeResponse {
  data: UserTypeBody[];
}

export async function findUserTypesController(param: string | number | null) {
  const response = await api.get<UserTypeResponse>("/usertypes", {
    params: {
      param,
    },
  });

  return response.data;
}
