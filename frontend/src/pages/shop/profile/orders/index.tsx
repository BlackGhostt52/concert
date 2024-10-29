import { MagnifyingGlass } from '@phosphor-icons/react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { OrderItem } from './components/order-item'

export function Orders  () {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="mb-28 flex w-full flex-col">
        <div className="mb-1 flex w-full justify-end">
          <div className="flex w-[470px] flex-row gap-5">
            <Input placeholder="Pesquisar" />
            <Button className="gap-3">
              <MagnifyingGlass size={20} />
              Pesquisar
            </Button>
          </div>
        </div>
        <div className="mt-6 w-full">
          {Array.from({ length: 4 }).map((_, index) => {
            return <OrderItem key={index} />
          })}
        </div>
      </div>
    </>
  )
}
