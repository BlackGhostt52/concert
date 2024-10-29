import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

export function AddressCard () {
  const [check, setCheck] = useState(false)

  function handleCheckState() {
    setCheck(!check)
  }

  return (
    <div>
      <div className="relative flex h-[171px] w-[335px] flex-col items-center justify-center rounded-lg bg-zinc-100">
        <Checkbox
          id="1"
          className="absolute right-4 top-4 border-black bg-black"
          onClick={() => handleCheckState()}
        />
        <div className="w-[275px]">
          <h1 className="text-base font-bold">Lorem Ipsum</h1>
          <p>4378 Lorem ipsum. Lorem, Ipsum 1284</p>

          <div className="mt-5 flex flex-row justify-between">
            <Button className="w-[130px] bg-zinc-200 text-zinc-950">
              Editar
            </Button>
            <Button className="w-[130px] bg-red-100 text-zinc-950">
              Excluir
            </Button>
          </div>
        </div>
      </div>
      {check && <Button className="mt-5 w-[335px]">Entregar Aqui</Button>}
    </div>
  )
}
