import { Eye, ShoppingCart, Star } from "@phosphor-icons/react";

interface ProductProps {
  name: string;
  description: string;
  price: number;
}

export function Product({ name, description, price }: ProductProps) {
  return (
    <div className="relative mb-3 w-[262px]">
      <div className="absolute right-1 top-1 flex w-min flex-col gap-2 rounded-md bg-zinc-100 p-2">
        <Star
          size={24}
          weight="regular"
          className="text-zinc-500 ease-in-out hover:cursor-pointer hover:text-zinc-950 hover:transition hover:duration-500"
        />
        <Eye
          size={24}
          weight="regular"
          className="text-zinc-500 ease-in-out hover:cursor-pointer hover:text-zinc-950 hover:transition hover:duration-500"
        />
        <ShoppingCart
          size={24}
          weight="regular"
          className="text-zinc-500 ease-in-out hover:cursor-pointer hover:text-zinc-950 hover:transition hover:duration-500"
        />
      </div>
      <img src="" alt="" className="h-[330px] w-auto bg-zinc-400" />
      <div className="flex flex-col pt-5">
        <strong className="truncate text-left text-sm">{name}</strong>
        <p className="truncate text-left text-sm">{description}</p>
        <span className="text-left text-sm">{price}</span>
      </div>
    </div>
  );
}
