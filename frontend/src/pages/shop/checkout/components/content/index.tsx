import { Trash } from '@phosphor-icons/react'

import { Increment } from '@/components/increment'

export function Content () {
  return (
    <>
      <div className="">
        <div className="w-[700px]">
          <table className="w-full">
            <thead>
              <tr className="mb-5 w-full border-b-[1px] border-zinc-200">
                <th className="pb-5 text-left">Produto</th>
                <th className="pb-5 text-left">Preço</th>
                <th className="pb-5 text-left">Quantidade</th>
                <th className="pb-5 text-left">Subtotal</th>
                <th className="pb-5 text-left"></th>
              </tr>
            </thead>
            <tbody className="">
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <tr
                    key={index}
                    className="w-full border-b-[1px] border-zinc-200"
                  >
                    <td className="w-[355px] py-6">
                      <div className="flex items-center">
                        <img
                          src=""
                          alt=""
                          className="mr-[10px] h-[70px] w-[70px] bg-zinc-400"
                        />
                        <div className="mr-[10px] flex flex-col">
                          <span className="block text-base font-bold">
                            Lorem ipsum dollar amset
                          </span>
                          <span>Size: S</span>
                        </div>
                      </div>
                    </td>
                    <td className="w-[93px] py-6">R$ 100,00</td>
                    <td className="w-[187px] py-6">
                      <Increment />
                    </td>
                    <td className="w-[96px] py-6">R$ 100,00</td>
                    <td>
                      <Trash
                        size={22}
                        className="text-red-500 hover:cursor-pointer"
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="div"></div>
      </div>
    </>
  )
}
