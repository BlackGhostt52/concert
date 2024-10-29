import { api } from "@/lib/axios";

interface UserBody {
  id: number;
  name: string;
  identity: string;
  email: string;
  password: string;
  idUserType: number;
}

interface UserResponse {
  data: UserBody[];
}

export async function updateUsersController(user: Partial<UserBody>) {
  const response = await api.patch<UserResponse>("/user", { user });

  return response.data;
}
