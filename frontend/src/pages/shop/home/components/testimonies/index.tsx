import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { StarRating } from '@/components/star-rating'

export function Testimonies () {
  return (
    <div className="mb-32 mt-24 flex w-full items-center justify-center bg-zinc-100 pb-10 pt-11">
      <div className="w-[1140px]">
        <header className="flex items-center justify-between">
          <h2 className="w-auto text-3xl font-medium">
            O que nossos consumidores dizem?
          </h2>
          <div className="flex">
            <div className="rounded-md bg-zinc-200 p-3">
              <ArrowLeft size={24} />
            </div>
            <div className="ml-2 rounded-md bg-zinc-200 p-3">
              <ArrowRight size={24} />
            </div>
          </div>
        </header>
        <main className="mt-7 flex w-[1140px] flex-wrap justify-between">
          <div className="my-3 flex h-[262px] w-[360px] flex-col justify-center rounded-lg bg-zinc-200 p-7">
            <StarRating rating={4} totalStars={5} />
            <p className="mt-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              enim, omnis iusto ad placeat animi soluta? Rem expedita beatae est
              illo nam, qui unde alias amet provident, porro, eius similique.
            </p>
            <div className="mt-3 flex items-center gap-4">
              <img
                src=""
                alt=""
                className="h-[48px] w-[48px] rounded-full bg-zinc-400"
              />
              <div className="flex flex-col">
                <strong>Lorem ipsum</strong>
                <span>Graphic Designer</span>
              </div>
            </div>
          </div>
          <div className="my-3 flex h-[262px] w-[360px] flex-col justify-center rounded-lg bg-zinc-200 p-7">
            <StarRating rating={4} totalStars={5} />
            <p className="mt-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              enim, omnis iusto ad placeat animi soluta? Rem expedita beatae est
              illo nam, qui unde alias amet provident, porro, eius similique.
            </p>
            <div className="mt-3 flex items-center gap-4">
              <img
                src=""
                alt=""
                className="h-[48px] w-[48px] rounded-full bg-zinc-400"
              />
              <div className="flex flex-col">
                <strong>Lorem ipsum</strong>
                <span>Graphic Designer</span>
              </div>
            </div>
          </div>
          <div className="my-3 flex h-[262px] w-[360px] flex-col justify-center rounded-lg bg-zinc-200 p-7">
            <StarRating rating={4} totalStars={5} />
            <p className="mt-3 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              enim, omnis iusto ad placeat animi soluta? Rem expedita beatae est
              illo nam, qui unde alias amet provident, porro, eius similique.
            </p>
            <div className="mt-3 flex items-center gap-4">
              <img
                src=""
                alt=""
                className="h-[48px] w-[48px] rounded-full bg-zinc-400"
              />
              <div className="flex flex-col">
                <strong>Lorem ipsum</strong>
                <span>Graphic Designer</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
