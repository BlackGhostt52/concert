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

export async function deleteUsersController(user: Partial<UserBody>) {
  const response = await api.delete<UserResponse>("/user", { data: user });

  return response.data;
}
