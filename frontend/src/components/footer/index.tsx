import {
  ArrowRight,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
  TwitterLogo,
} from '@phosphor-icons/react'
import React from 'react'

import { Input } from '@/components/ui/input'

export const Footer: React.FC = function () {
  return (
    <div className="flex h-72 w-full flex-col items-center justify-center bg-zinc-900">
      <div className="flex w-[1140px] justify-between">
        <div className="">
          <nav>
            <strong className="text-3xl text-zinc-100">Logo</strong>
            <ul className="mt-6 flex flex-col gap-y-4">
              <li className="flex gap-4 text-sm text-zinc-100">
                <Phone size={24} weight="regular" className="text-zinc-100" />
                (99) 999 999 999
              </li>
              <li className="flex gap-4 text-sm text-zinc-100">
                <EnvelopeSimple
                  size={24}
                  weight="regular"
                  className="text-zinc-100"
                />
                inceptum@gmail.com
              </li>
              <li className="flex gap-4 text-sm text-zinc-100">
                <MapPin size={24} weight="regular" className="text-zinc-100" />
                Rua Lorem ipsum dollar vero qui
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <nav>
            <strong className="text-sm font-bold text-zinc-100">
              Informações
            </strong>
            <ul className="mt-2 flex flex-col gap-y-1">
              <li className="text-sm text-zinc-100">Minha conta</li>
              <li className="text-sm text-zinc-100">Login</li>
              <li className="text-sm text-zinc-100">Meu carrinho</li>
              <li className="text-sm text-zinc-100">Lista de desejos</li>
              <li className="text-sm text-zinc-100">Checkout</li>
            </ul>
          </nav>
        </div>
        <div className="">
          <nav>
            <strong className="text-sm font-bold text-zinc-100">
              Serviços
            </strong>
            <ul className="mt-2 flex flex-col gap-y-1">
              <li className="text-sm text-zinc-100">Sobre Nós</li>
              <li className="text-sm text-zinc-100">Carreiras</li>
              <li className="text-sm text-zinc-100">Informação de entrega</li>
              <li className="text-sm text-zinc-100">Política de Privacidade</li>
              <li className="text-sm text-zinc-100">Termos & Condições</li>
            </ul>
          </nav>
        </div>
        <div className="">
          <strong className="text-sm font-bold text-zinc-100">
            Inscreva-se
          </strong>
          <p className="mb-[23px] mt-3 w-[310px] text-sm text-zinc-100">
            Lorem ipsum dolor, sit amet consectetur. Nisi, voluptas provident
            vero qui quisquam !
          </p>
          <div className="flex items-center rounded-lg border-2 border-zinc-100 px-3 py-1">
            <EnvelopeSimple
              size={32}
              weight="regular"
              className="text-zinc-100"
            />
            <Input
              className="border-transparent bg-transparent p-0 pl-1 text-zinc-100 placeholder:text-zinc-400"
              placeholder="email@exemplo.com"
            />
            <ArrowRight size={24} weight="regular" className="text-zinc-100" />
          </div>
        </div>
      </div>
      <div className="mt-11 flex w-[1140px] items-center justify-between border-t-[1px] border-zinc-100 pt-3">
        <div className="flex flex-row gap-2">
          <img src="" alt="" className="w-[38px]" />
          <img src="" alt="" className="w-[38px]" />
          <img src="" alt="" className="w-[38px]" />
          <img src="" alt="" className="w-[38px]" />
          <img src="" alt="" className="w-[38px]" />
        </div>
        <div className="text-zinc-100">
          &#9400;2024 Projeto Integrador | Fatec - Todos os direitos reservados
        </div>
        <div className="flex flex-row gap-3">
          <FacebookLogo size={24} weight="regular" className="text-zinc-100" />
          <InstagramLogo size={24} weight="regular" className="text-zinc-100" />
          <TwitterLogo size={24} weight="regular" className="text-zinc-100" />
        </div>
      </div>
    </div>
  )
}
