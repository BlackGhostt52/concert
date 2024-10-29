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

export async function createStoresController(store: Partial<StoreBody>) {
  const response = await api.post<StoreResponse>("/store", { store });

  return response.data;
}
