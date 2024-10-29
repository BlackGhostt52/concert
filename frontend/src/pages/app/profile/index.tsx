import { Pencil, User } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/button'

export function Profile() {
  return (
    <>
      <Helmet title="Perfil" />

      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[250px_1fr]">
        <div className="flex h-min flex-col gap-2 bg-zinc-100 p-4">
          <div>Meu perfil</div>
          <div>Meus pedidos</div>
          <div>Favoritos</div>
          <div>Preferências</div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative flex items-center gap-2 bg-zinc-100 p-4">
            <div className="absolute right-1 top-1">
              <Button type="button" variant="ghost" size="icon">
                <Pencil className="size-4 text-zinc-500" />
              </Button>
            </div>
            <div className="rounded-full bg-zinc-300 p-4">
              <User className="size-8 text-zinc-500" />
            </div>

            <div className="space-y-2">
              <h1 className="text-xl font-semibold text-zinc-700">John Doe</h1>
              <span className="text-sm text-zinc-500">johndoe@example.com</span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-zinc-700">
              Histórico de pedidos
            </h2>

            <div className="flex flex-col gap-2 bg-zinc-100 p-4">
              <div>pedido 1</div>
              <div>pedido 2</div>
              <div>pedido 3</div>
              <div>pedido 4</div>
              <div>pedido 5</div>
              <div>pedido 6</div>
              <div>pedido 7</div>
              <div>pedido 8</div>
            </div>
          </div>

          <Button type="button" className="w-32" variant="destructive">
            Sair da conta
          </Button>
        </div>
      </div>
    </>
  )
}
