import { CreditCard, House, Note, NotePencil } from '@phosphor-icons/react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { AddressCard } from '../address-card'

export function Content () {
  const [address, setAddress] = useState(true)
  const [payment, setPayment] = useState(false)
  const [review, setReview] = useState(false)
  const [title, setTitle] = useState('Endereço de entrega')

  function handleAddressState() {
    if (address === false) {
      setTitle('Endereço de entrega')
      setAddress(true)
      setPayment(false)
      setReview(false)
    }
  }

  function handlePaymentState() {
    if (payment === false) {
      setTitle('Método de pagamento')
      setAddress(false)
      setPayment(true)
      setReview(false)
    }
  }

  function handleReviewState() {
    if (review === false) {
      setTitle('Revisar seu pedido')
      setAddress(false)
      setPayment(false)
      setReview(true)
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="my-[50px] text-3xl font-medium text-zinc-950">{title}</h1>
      <Tabs defaultValue="address" className="w-[700px]">
        <TabsList className="flex flex-row items-center justify-between bg-transparent">
          <TabsTrigger
            value="address"
            id="address"
            className="flex flex-col"
            onClick={() => handleAddressState()}
          >
            <div
              className={
                address == true
                  ? 'mb-3 rounded-md bg-zinc-950 p-2 text-zinc-100'
                  : 'mb-3 rounded-md bg-zinc-200 p-2 text-zinc-950'
              }
            >
              <House size={24} />
            </div>
            Endereço
          </TabsTrigger>
          <Separator className="w-44 border-[1px] border-dashed border-zinc-950 bg-transparent" />
          <TabsTrigger
            value="payment"
            id="payment"
            className="flex flex-col bg-transparent"
            onClick={() => handlePaymentState()}
          >
            <div
              className={
                payment == true
                  ? 'mb-3 rounded-md bg-zinc-950 p-2 text-zinc-100'
                  : 'mb-3 rounded-md bg-zinc-200 p-2 text-zinc-950'
              }
            >
              <CreditCard size={24} />
            </div>
            Metodo de pagamento
          </TabsTrigger>
          <Separator className="w-44 border-[1px] border-dashed border-zinc-950 bg-transparent" />
          <TabsTrigger
            value="review"
            id="review"
            className="flex flex-col"
            onClick={() => handleReviewState()}
          >
            <div
              className={
                review == true
                  ? 'mb-3 rounded-md bg-zinc-950 p-2 text-zinc-100'
                  : 'mb-3 rounded-md bg-zinc-200 p-2 text-zinc-950'
              }
            >
              <Note size={24} />
            </div>
            Revisar
          </TabsTrigger>
        </TabsList>
        <TabsContent value="address">
          <div>
            <div>
              <div className="mb-5 mt-14">
                <h2 className="text-lg font-bold text-zinc-950">
                  Selecione o endereço de entrega
                </h2>
                <p>
                  Selecione o endereço o qual você quer que entreguemos seu
                  pedido, você pode edita-lo, exclui-lo ou adicionar um novo
                </p>
              </div>
              <div className="">
                <AddressCard />
              </div>
            </div>
            <Separator className="mb-6 mt-9 w-full" />
            <div>
              <h2 className="mb-4 text-lg font-bold">
                Adicione um novo endereço
              </h2>
              <form action="">
                <div className="my-3">
                  <label htmlFor="">Nome</label>
                  <Input className="mt-1" />
                </div>
                <div className="my-3">
                  <label htmlFor="">Numero de telefone</label>
                  <Input className="mt-1" />
                </div>
                <div className="my-3">
                  <label htmlFor="">E-mail</label>
                  <Input className="mt-1" />
                </div>
                <div className="my-3">
                  <label htmlFor="">Estado</label>
                  <Input className="mt-1" />
                </div>
                <div className="my-3">
                  <label htmlFor="">Cidade</label>
                  <Input className="mt-1" />
                </div>
                <div className="my-3">
                  <label htmlFor="">Bairro</label>
                  <Input className="mt-1" />
                </div>
                <div className="my-3">
                  <label htmlFor="">Rua</label>
                  <Input className="mt-1" />
                </div>
                <Button className="mt-4">Adicionar endereço</Button>
              </form>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="payment">
          <h2 className="mt-16 text-lg font-bold">
            Selecione o método de pagamento
          </h2>
          <form action="">
            <RadioGroup defaultValue="option-one">
              <div className="mt-10 flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Cartão de Credito</Label>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Cartão de Débito</Label>
              </div>
            </RadioGroup>
            <div className="my-3">
              <label htmlFor="">Número do cartão</label>
              <Input />
            </div>
            <div className="my-3">
              <label htmlFor="">Nome que tá no cartão</label>
              <Input />
            </div>
            <div className="flex w-full flex-row gap-4">
              <div className="w-full">
                <label htmlFor="">Data de validação</label>
                <Input />
              </div>
              <div className="w-full">
                <label htmlFor="">CVV</label>
                <Input />
              </div>
            </div>

            <Button className="my-4">Adicionar ao carrinho</Button>

            <RadioGroup defaultValue="option-one">
              <Separator className="mt-2" />
              <div className="my-3 flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Google Pay</Label>
              </div>
              <Separator />
              <div className="my-3 flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Paypal</Label>
              </div>
              <Separator />
              <div className="my-3 flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three">Boleto</Label>
              </div>
            </RadioGroup>
            <Button className="my-3">Continuar</Button>
          </form>
        </TabsContent>
        <TabsContent value="review">
          <h2 className="mt-12 text-xl font-bold">
            Estimativa de entrega: 22 Dez 2024
          </h2>
          <div className="">
            <div className="flex flex-row border-b-[1px] border-b-zinc-200 py-5">
              <img src="" alt="" className="h-[70px] w-[70px] bg-zinc-500" />
              <div className="ml-4 flex flex-col">
                <strong className="text-base font-bold">
                  Lorem ipsum dollar
                </strong>
                <span>R$ 100,00</span>
                <span>Size: M</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Endereço de entrega</h3>
            <div className="">
              <div className="flex flex-row items-center justify-between border-b-[1px] border-b-zinc-200 py-5">
                <div className="flex flex-col">
                  <strong className="text-base font-bold">Lorem ipsum</strong>
                  <span>375856 Lorem inceptum, Dollar amset 1374</span>
                </div>
                <Button className="bg-zinc-100 p-2 text-foreground hover:text-muted">
                  <NotePencil size={24} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Método de pagamento</h3>
            <div className="">
              <div className="flex flex-row items-center justify-between border-b-[1px] border-b-zinc-200 py-5">
                <div className="flex flex-col">
                  <strong className="text-base font-bold">
                    Debit Card (.... .... .... ..23)
                  </strong>
                </div>
                <Button className="bg-zinc-100 p-2 text-foreground hover:text-muted">
                  <NotePencil size={24} />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
