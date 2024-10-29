import { Trash } from '@phosphor-icons/react'
import React from 'react'

export const ProductRow: React.FC = function () {
  return (
    <div className="flex border-b-[1px] border-b-zinc-500 py-7">
      <img src="" alt="" className="mr-[10px] h-[70px] w-[70px] bg-zinc-400" />
      <div className="mr-[10px] flex w-[204px] flex-col">
        <span className="block text-base">Lorem ipsum dollar amset</span>
        <strong>5 x R$100,00</strong>
        <span>Size: S</span>
      </div>
      <Trash size={24} className="mt-auto text-red-500" />
    </div>
  )
}
