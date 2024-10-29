import {
  BellRinging,
  CreditCard,
  Gear,
  Heart,
  MapPin,
  Package,
  User,
} from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

import { Separator } from '../ui/separator'

export const Menubar: React.FC = function () {
  return (
    <div className="mr-12">
      <h1 className="mb-12 text-4xl font-medium">Meu perfil</h1>
      <div className="h-[524px] w-[262px] border-[1px]">
        <div className="ml-5 mt-5 flex flex-row">
          <img
            src=""
            alt=""
            className="mr-4 h-[51px] w-[51px] rounded-full bg-zinc-500"
          />
          <div className="flex flex-col">
            <span>Olá</span>
            <strong>John Doe</strong>
          </div>
        </div>

        <Separator className="my-5" />

        <nav>
          <ul>
            <Link to="">
              <li className="ml-5 flex h-[56px] flex-row items-center gap-3 text-foreground">
                <User size={24} />
                Informações pessoais
              </li>
            </Link>
            <Link to="">
              <li className="ml-5 flex h-[56px] flex-row items-center gap-3 text-foreground">
                <Package size={24} />
                Pedidos
              </li>
            </Link>
            <Link to="">
              <li className="ml-5 flex h-[56px] flex-row items-center gap-3 text-foreground">
                <Heart size={24} />
                Lista de desejos
              </li>
            </Link>
            <Link to="">
              <li className="ml-5 flex h-[56px] flex-row items-center gap-3 text-foreground">
                <MapPin size={24} />
                Gerenciar endereços
              </li>
            </Link>
            <Link to="">
              <li className="ml-5 flex h-[56px] flex-row items-center gap-3 text-foreground">
                <CreditCard size={24} />
                Cartões salvos
              </li>
            </Link>
            <Link to="">
              <li className="ml-5 flex h-[56px] flex-row items-center gap-3 text-foreground">
                <BellRinging size={24} />
                Notificações
              </li>
            </Link>
            <Link to="">
              <li className="ml-5 flex h-[56px] flex-row items-center gap-3 text-foreground">
                <Gear size={24} />
                Configurações
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  )
}
