import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'

export function Categories () {
  return (
    <div className="mt-20 w-[1140px]">
      <header className="flex items-center justify-between">
        <h2 className="w-96 text-3xl font-medium">Compre por categoria</h2>
        <div className="flex">
          <div className="rounded-md bg-zinc-200 p-3">
            <ArrowLeft size={24} />
          </div>
          <div className="ml-2 rounded-md bg-zinc-200 p-3">
            <ArrowRight size={24} />
          </div>
        </div>
      </header>
      <main className="mt-4 flex w-[1140px] flex-wrap justify-between">
        <div className="my-3 h-[360px] w-[262px] bg-zinc-400"></div>
        <div className="my-3 h-[360px] w-[262px] bg-zinc-400"></div>
        <div className="my-3 h-[360px] w-[262px] bg-zinc-400"></div>
        <div className="my-3 h-[360px] w-[262px] bg-zinc-400"></div>
      </main>
    </div>
  )
}
