import { NotePencil, PhoneCall, Plus, Trash } from '@phosphor-icons/react'
import { Helmet } from 'react-helmet-async'

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
import { Label } from '@/components/ui/label'

export function ManageAddresses  () {
  return (
    <>
      <Helmet title="Gerenciar Endereços" />
      <div className="mt-[88px] flex w-full flex-col">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-[320px] text-background">
              <Plus weight="bold" size={20} className="mr-2 text-background" />
              Adicionar novo endereço
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar novo endereço</DialogTitle>
              <DialogDescription>
                Preencha os campos do formulário.
              </DialogDescription>
            </DialogHeader>
            <form action="">
              <div className="">
                <Label>Estado</Label>
                <Input className="mt-1" />
              </div>
              <div className="mt-2">
                <Label>Cidade</Label>
                <Input className="mt-1" />
              </div>
              <div className="mt-2">
                <Label>Bairro</Label>
                <Input className="mt-1" />
              </div>
              <div className="mt-2">
                <Label>Rua</Label>
                <Input className="mt-1" />
              </div>
              <div className="mt-2">
                <Label>Número de telefone</Label>
                <Input className="mt-1" />
              </div>
              <div className="mt-2">
                <Label>Ponto de referência</Label>
                <Input className="mt-1" />
              </div>
              <div className="mt-5 flex flex-row justify-between gap-8">
                <Button className="w-full bg-secondary text-foreground hover:text-background">
                  Cancelar
                </Button>
                <Button className="w-full">Adicionar</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        <div className="mt-2 w-full">
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <div
                key={index}
                className="flex w-full items-center justify-between border-b-2 border-b-zinc-100 py-4"
              >
                <div className="flex flex-col gap-2">
                  <strong className="text-2xl">Lorem ipsum</strong>
                  <p>29874 Lorem ipsum, Avenue akatset 1286</p>
                  <div className="flex items-center">
                    <PhoneCall size={20} />
                    (99) 9999-9999
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button>
                    <NotePencil weight="regular" size={24} className="mr-2" />
                    Editar
                  </Button>
                  <Button>
                    <Trash weight="regular" size={24} className="mr-2" />
                    Deletar
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
