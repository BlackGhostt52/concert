import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Content () {
  return (
    <div className="m-auto flex w-[445px] flex-col flex-wrap">
      <h1 className="text-3xl font-bold">Nova Senha</h1>
      <p className="mt-1 text-base font-normal text-zinc-500">
        Insira sua nova senha.
      </p>

      <div className="mt-5">
        <label htmlFor="" className="text-base font-medium">
          Nova senha
        </label>
        <Input id="" name="" className="mt-1" />
      </div>

      <div className="mt-5">
        <label htmlFor="" className="text-base font-medium">
          Confirmar nova senha
        </label>
        <Input id="" name="" className="mt-1" />
      </div>

      <Button className="mt-6">Alterar senha</Button>
    </div>
  )
}
