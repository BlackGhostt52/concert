import { Heart } from '@phosphor-icons/react'
import { useState } from 'react'

export function Favorite () {
  const [favorite, setFavorite] = useState<boolean>(false)

  function handleToFavorite() {
    setFavorite(!favorite)
  }

  return (
    <div
      data-check={favorite}
      className="flex items-center justify-center rounded-lg border-2 border-zinc-950 p-2 px-3 hover:cursor-pointer data-[check=false]:bg-zinc-100 data-[check=true]:bg-zinc-950"
    >
      <Heart
        data-check={favorite}
        size={24}
        weight="fill"
        className="data-[check=false]:text-zinc-950 data-[check=true]:text-zinc-100"
        onClick={() => handleToFavorite()}
      />
      <h1>{favorite}</h1>
    </div>
  )
}
