import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Content () {
  return (
    <div className="m-auto flex w-[445px] flex-col flex-wrap">
      <h1 className="text-3xl font-bold">Esqueceu a Senha</h1>
      <p className="mt-1 text-base font-normal text-zinc-500">
        Insira seu endereço de e-mail registrado. Nós lhe enviaremos um link no
        seu e-mail para redefinir sua senha.
      </p>

      <div className="mt-5">
        <label htmlFor="" className="text-base font-medium">
          E-mail
        </label>
        <Input id="" name="" className="mt-1" />
      </div>

      <Button className="mt-6">Enviar</Button>
    </div>
  )
}
