import { Helmet } from 'react-helmet-async'

export function Notifications  () {
  return (
    <>
      <Helmet title="Notificações" />
      <div className="mt-[88px] w-full">
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <div
              key={index}
              className="border-b-zinc2100 flex w-full flex-row items-center justify-between border-b-[1px] py-5"
            >
              <div className="flex flex-row gap-4">
                <img src="" alt="" className="h-[53px] w-[53px]" />
                <div className="">
                  <strong>John Doe</strong>
                  <p>Você atualizou sua foto de perfil</p>
                </div>
              </div>
              <p>11:55 AM</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
