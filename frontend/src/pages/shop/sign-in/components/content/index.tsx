import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'

export function Content () {
  return (
    <div className="m-auto flex w-[445px] flex-col flex-wrap">
      <h1 className="text-3xl font-bold">Bem-vindo</h1>
      <p className="mt-1 text-base font-normal text-zinc-500">
        Faça login aqui
      </p>
      <div className="mt-6">
        <label htmlFor="" className="text-base font-medium">
          E-mail
        </label>
        <Input id="" name="" />
      </div>
      <div className="mt-3">
        <label htmlFor="" className="text-base font-medium">
          Senha
        </label>
        <Input id="" name="" />
      </div>

      <div className="mt-3 flex justify-between">
        <div className="flex items-center">
          <Checkbox id="remember" />
          <label htmlFor="remember" className="ml-2">
            Lembrar-me sempre
          </label>
        </div>
        <Link to={'#'}>Esqueceu a senha?</Link>
      </div>
      <Button className="mt-6">Entrar</Button>
    </div>
  )
}
