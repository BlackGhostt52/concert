import { Search, ShoppingBasket, ShoppingCart, User } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from './button'

export function Header() {
  // const links = [
  //   { title: 'Início', url: '/' },
  //   { title: 'Categorias', url: '/' },
  //   { title: 'Contato', url: '/' },
  //   { title: 'Início', url: '/' },
  // ]

  return (
    <header className="sticky left-0 top-0 w-full shadow-md">
      <div className="flex items-center justify-between bg-green-500 px-2 py-3 text-white">
        <Link
          to="/"
          className="flex items-center gap-2 p-2 text-2xl font-semibold outline-none focus-visible:ring-2 focus-visible:ring-green-400"
        >
          <ShoppingBasket className="size-8" />
          e-Shopee
        </Link>

        <form className="hidden w-full max-w-[600px] items-center justify-between border-2 border-white bg-white px-3 py-2 shadow-md focus-within:border-green-500 lg:flex">
          <input
            type="text"
            placeholder="Buscar lojas, produtos, categorias etc..."
            className="w-full bg-transparent text-sm text-zinc-700 outline-none placeholder:text-zinc-400 lg:text-lg"
          />
          <Button
            type="submit"
            variant="ghost"
            className="flex items-center justify-center"
            size="sm"
          >
            <Search className="size-5 text-zinc-500" />
          </Button>
        </form>

        <div className="flex items-center lg:gap-2">
          <Button
            type="button"
            variant="ghost"
            className="flex items-center justify-center lg:hidden"
            size="icon"
          >
            <Search className="size-5" />
          </Button>

          <Button
            type="button"
            variant="ghost"
            className="relative flex items-center justify-center"
            size="icon"
          >
            <ShoppingCart className="size-5" />

            <span className="absolute right-1 top-1 size-4 rounded-full bg-white text-xs text-zinc-500">
              1
            </span>
          </Button>

          <div className="ml-2 cursor-pointer rounded-full bg-zinc-300 p-2">
            <User className="size-5 text-zinc-500" />
          </div>
        </div>
      </div>
    </header>
  )
}
