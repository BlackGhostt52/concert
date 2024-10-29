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

export async function findAddressesController(param: string | number | null) {
  const response = await api.get<AddressResponse>("/address", {
    params: {
      param,
    },
  });

  return response.data;
}
