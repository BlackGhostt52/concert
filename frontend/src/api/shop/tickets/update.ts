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

export async function updateTicketsController(tickets: Partial<TicketBody>) {
  const response = await api.patch<TicketResponse>("/tickets", { tickets });

  return response.data;
}
