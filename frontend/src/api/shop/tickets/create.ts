import { api } from "@/lib/axios";

interface TicketBody {
  id: number;
  title: string;
  description: string;

  createdAt: Date;
  updatedAt: Date;
  idUser: number;
}

interface TicketResponse {
  data: TicketBody[];
}

export async function createTicketsController(tickets: Partial<TicketBody>) {
  const response = await api.post<TicketResponse>("/tickets", { tickets });

  return response.data;
}
