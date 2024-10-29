import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'

import { Input } from '@/components/ui/input'

export function Increment () {
  const [count, setCount] = useState(1)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div className="flex items-center rounded-lg border-2 border-zinc-950 px-3">
      <Plus size={24} weight="regular" onClick={() => increment()} />
      <Input
        className="mx-[2px] h-[35px] w-[35px] border-none p-0 text-center text-lg"
        value={count}
        readOnly
      />
      <Minus size={24} weight="regular" onClick={() => decrement()} />
    </div>
  )
}
