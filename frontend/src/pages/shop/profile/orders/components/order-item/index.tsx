import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function OrderItem () {
  return (
    <div className="flex w-full flex-row justify-between border-b-2 border-b-zinc-100 py-5">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <img src="" alt="" className="h-20 w-20" />
          <div className="flex flex-col">
            <strong>Lorem ipsum</strong>
            <span>Size: P</span>
            <span>Quantity: 1</span>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <Badge className="bg-green-100 text-green-400">Entregue</Badge>
          <p>Seu pedido foi entregue!</p>
        </div>
      </div>

      <strong>R$ 142,00</strong>

      <div className="flex flex-col gap-2">
        <Button className="border-[1px] border-foreground bg-background text-foreground hover:text-muted">
          Ver pedido
        </Button>
        <Button>Write a review</Button>
      </div>
    </div>
  )
}
