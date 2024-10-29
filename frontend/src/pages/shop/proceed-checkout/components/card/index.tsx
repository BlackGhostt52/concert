import { Handbag } from '@phosphor-icons/react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export function Card () {
  return (
    <div className="mt-28 h-[320px] w-[360px] border p-5">
      <header className="flex flex-row justify-between border-b-[1px] border-b-zinc-200 pb-4">
        <strong className="">Subtotal</strong>
        <strong className="">R$ 400,00</strong>
      </header>
      <div className="my-4">
        <label htmlFor="">Colocar um cupom de desconto</label>
        <div className="mt-2 flex">
          <Input className="rounded-none rounded-l-lg" />
          <Button className="rounded-none rounded-r-lg">Aplicar</Button>
        </div>
      </div>
      <div className="flex justify-between border-b-[1px] border-b-zinc-200 pb-3">
        <p>Delivery Charge</p>
        <p>R$ 5,00</p>
      </div>
      <footer>
        <div className="mt-3 flex flex-row justify-between">
          <strong className="">Total</strong>
          <strong className="">R$ 420,00</strong>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-5 w-full">Continuar com o checkout</Button>
          </DialogTrigger>
          <DialogContent className="w-[492px]">
            <DialogHeader>
              <div className="m-auto mb-4 rounded-full bg-foreground p-5">
                <Handbag size={24} className="text-muted" />
              </div>
              <DialogTitle className="text-center text-lg font-bold">
                Seu pedido foi confirmado!
              </DialogTitle>
              <DialogDescription className="text-center text-base font-normal">
                Obrigado por comprar! Seu pedido ainda não foi enviado, mas
                enviaremos um e-mail quando isso for feito!
              </DialogDescription>
            </DialogHeader>
            <Button className="mt-4">Ver pedido</Button>
            <Button className="border-[1px] border-foreground bg-background text-foreground hover:text-muted">
              Voltar para a página principal
            </Button>
          </DialogContent>
        </Dialog>
      </footer>
    </div>
  )
}
