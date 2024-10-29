import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Card () {
  return (
    <div className="mt-10 h-[320px] w-[360px] border p-5">
      <header className="flex flex-row justify-between border-b-[1px] border-b-zinc-200 pb-4">
        <strong className="">Subtotal</strong>
        <strong className="">R$ 400,00</strong>
      </header>
      <div className="my-4">
        <label htmlFor="">Colocar um cupom de desconto</label>
        <div className="flex">
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
        <Button className="mt-5 w-full">Continuar com o checkout</Button>
      </footer>
    </div>
  )
}
