import { Heart, MagnifyingGlass, ShoppingBag } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Button } from '../ui/button'
import { ProductRow } from './components/product-row'

export const Header: React.FC = function () {
  return (
    <header className="my-4 flex h-11 w-[1140px] items-center justify-between">
      <div className="">Logo</div>
      <nav>
        <ul className="flex flex-wrap items-center">
          <Link to="/home">
            <li className="mx-4 text-lg font-normal">Principal</li>
          </Link>
          <Link to="/shop">
            <li className="mx-4 text-lg font-normal">Comprar</li>
          </Link>
          <Link to="/our-history">
            <li className="mx-4 text-lg font-normal">Nossa História</li>
          </Link>
          <Link to="/blog">
            <li className="mx-4 text-lg font-normal">Blog</li>
          </Link>
          <Link to="/contact-us">
            <li className="mx-4 text-lg font-normal">Fale Conosco</li>
          </Link>
        </ul>
      </nav>

      <div className="flex items-center gap-5">
        <div className="flex gap-3">
          <MagnifyingGlass size={24} weight="regular" />
          <Heart size={24} weight="regular" />

          <Dialog>
            <DialogTrigger asChild>
              <ShoppingBag size={24} weight="regular" />
            </DialogTrigger>
            <DialogContent className="w-[352px] px-4">
              <DialogHeader>
                <DialogTitle>Você tem 5 items no seu carrinho</DialogTitle>
              </DialogHeader>
              <div className="">
                <ProductRow />
              </div>

              <div className="flex flex-row justify-between">
                <strong>Subtotal</strong>
                <strong>R$ 200.00</strong>
              </div>

              <Button className="border-2 border-zinc-950 bg-transparent text-zinc-950 hover:bg-zinc-950 hover:text-zinc-50">
                Ver carrinho
              </Button>
              <Button>Checkout de compras</Button>
            </DialogContent>
          </Dialog>
        </div>
        <button className="rounded-md bg-zinc-900 px-8 py-3 text-lg font-normal text-zinc-100">
          Entrar
        </button>
      </div>
    </header>
  )
}
