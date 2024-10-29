import { api } from "@/lib/axios";

interface AddressBody {
  id: number;
  country: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement: string;
  idUser: number;
}

interface AddressResponse {
  data: AddressBody[];
}

export async function createAddressesController(address: Partial<AddressBody>) {
  const response = await api.post<AddressResponse>("/address", { address });

  return response.data;
}
