import { NotePencil } from '@phosphor-icons/react'
import { Helmet } from 'react-helmet-async'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function PersonalInformation  () {
  return (
    <>
      <Helmet title="Informações pessoas" />
      <div className="mt-[88px] w-full">
        <div className="flex flex-row justify-between">
          <Avatar className="h-20 w-20 bg-zinc-200">
            <AvatarImage src="" className="" />
            <AvatarFallback>Profile Picture</AvatarFallback>
          </Avatar>
          <Button className="gap-2">
            <NotePencil size={24} />
            Editar perfil
          </Button>
        </div>

        <form action="" className="mt-10">
          <div className="flex w-full flex-row gap-4">
            <div className="w-full">
              <Label className="font-regular text-xs">Primeiro nome</Label>
              <Input />
            </div>
            <div className="w-full">
              <Label className="font-regular text-xs">Sobrenome</Label>
              <Input />
            </div>
          </div>
          <div className="mt-4 flex w-full flex-row gap-4">
            <div className="w-full">
              <Label className="font-regular text-xs">Número de telefone</Label>
              <Input />
            </div>
            <div className="w-full">
              <Label className="font-regular text-xs">Endereço de email</Label>
              <Input />
            </div>
          </div>
          <div className="mt-4 w-full">
            <Label className="font-regular text-xs">Endereço</Label>
            <Input />
          </div>
        </form>
      </div>
    </>
  )
}
