import { api } from "@/lib/axios";

interface StoreBody {
  id: number;
  name: string;
  logo: string;
  banner: string;
  quantityProduct: string;
  background: string;
  fontColor: string;
  area: string;
  cnpj: string;
  idUser: number;
}

interface StoreResponse {
  data: StoreBody[];
}

export async function findStoresController(param: string | number | null) {
  const response = await api.get<StoreResponse>("/store", {
    params: {
      param,
    },
  });

  return response.data;
}
