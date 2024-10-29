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

export async function deleteAddressesController(address: Partial<AddressBody>) {
  const response = await api.delete<AddressResponse>("/address", {
    data: address,
  });

  return response.data;
}
