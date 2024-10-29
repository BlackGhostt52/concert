import { Eye, ShoppingCart, Star } from '@phosphor-icons/react'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Main () {
  return (
    <div className="mt-14 flex w-[847px] flex-col items-center justify-center">
      <header className="mb-3 flex w-full flex-row items-center justify-between">
        <div className="text-sm">Mostrando 1 - 20 de 800 resultados</div>
        <Select>
          <SelectTrigger className="w-[90px] border-none focus:outline-none focus:ring-0">
            <SelectValue placeholder="Listar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="az">A - Z</SelectItem>
            <SelectItem value="za">Z - A</SelectItem>
          </SelectContent>
        </Select>
      </header>
      <main className="flex w-full flex-wrap justify-between">
        {Array.from({ length: 40 }).map((_, index) => {
          return (
            <div key={index} className="relative mb-3 w-[262px]">
              <div className="absolute right-1 top-1 flex w-min flex-col gap-2 rounded-md bg-zinc-100 p-2">
                <Star
                  weight="regular"
                  size={24}
                  className="text-zinc-500 ease-in-out hover:cursor-pointer hover:text-zinc-950 hover:transition hover:duration-500"
                />
                <Eye
                  weight="regular"
                  size={24}
                  className="text-zinc-500 ease-in-out hover:cursor-pointer hover:text-zinc-950 hover:transition hover:duration-500"
                />
                <ShoppingCart
                  weight="regular"
                  size={24}
                  className="text-zinc-500 ease-in-out hover:cursor-pointer hover:text-zinc-950 hover:transition hover:duration-500"
                />
              </div>
              <img src="" alt="" className="h-[330px] w-auto bg-zinc-400" />
              <div className="flex flex-col pt-5">
                <strong className="truncate text-left text-sm">
                  Lorem ipsum
                </strong>
                <p className="truncate text-left text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsam omnis animi repudiandae impedit dolorem cupiditate
                  maiores hic alias. Quidem in quos placeat possimus suscipit
                  quia consequatur neque porro voluptatem accusantium.
                </p>
                <span className="text-left text-sm">R$ 600,00</span>
              </div>
            </div>
          )
        })}
      </main>
      <div className="float-right">
        <Pagination className="">
          <PaginationContent className="">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
