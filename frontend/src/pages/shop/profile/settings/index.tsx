import { Helmet } from 'react-helmet-async'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'

export function Settings () {
  return (
    <>
      <Helmet title="Configurações" />
      <div className="mt-[88px] flex w-full flex-col">
        <div className="flex flex-row items-center justify-between border-b-[1px] border-b-zinc-200 pb-6">
          <div className="flex flex-col">
            <strong>Aparência</strong>
            <p>Customize o tema do aplicativo</p>
          </div>
          <div className="flex flex-row items-center">
            <Select>
              <SelectTrigger className="w-[93px]">
                <SelectValue placeholder="Tema" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between border-b-[1px] border-b-zinc-200 py-6">
          <div className="flex flex-col">
            <strong>Autenticação em Dois Fatores</strong>
            <p>
              Deixe sua conta segura ativando a Autenticação em Dois Fatores
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Switch />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between border-b-[1px] border-b-zinc-200 py-6">
          <div className="flex flex-col">
            <strong>Push Notificações</strong>
            <p>Receber notificações push</p>
          </div>
          <div className="flex flex-row items-center">
            <Switch />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between border-b-[1px] border-b-zinc-200 py-6">
          <div className="flex flex-col">
            <strong>Notificações de Desktop</strong>
            <p>Receber notificações push no Desktop</p>
          </div>
          <div className="flex flex-row items-center">
            <Switch />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between border-b-[1px] border-b-zinc-200 py-6">
          <div className="flex flex-col">
            <strong>Notificações de Email</strong>
            <p>Receber notificações de email</p>
          </div>
          <div className="flex flex-row items-center">
            <Switch />
          </div>
        </div>
      </div>
    </>
  )
}
