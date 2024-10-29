import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'

export function Content () {
  return (
    <div className="m-auto flex w-[445px] flex-col flex-wrap">
      <h1 className="text-3xl font-bold">Criar uma conta</h1>
      <p className="mt-1 text-base font-normal text-zinc-500">
        Informe seus dados
      </p>

      <fieldset className="mt-8">
        <legend className="w-[150px] border-b-2 border-b-zinc-950 text-xl font-bold">
          Dados Pessoais
        </legend>
        <div className="mt-5 flex flex-row items-center gap-5">
          <div className="w-full">
            <label htmlFor="" className="text-base font-medium">
              Primeiro nome
            </label>
            <Input id="" name="" className="mt-1" />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-base font-medium">
              Sobrenome
            </label>
            <Input id="" name="" className="mt-1" />
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-base font-medium">
            Identidade
          </label>
          <Input id="" name="" className="mt-1" />
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-base font-medium">
            E-mail
          </label>
          <Input id="" name="" className="mt-1" />
        </div>
        <div className="mt-3">
          <label htmlFor="" className="text-base font-medium">
            Senha
          </label>
          <Input id="" name="" className="mt-1" />
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="w-[150px] border-b-2 border-b-zinc-950 text-xl font-bold">
          Endereço
        </legend>
        <div className="mt-5 flex flex-row items-center gap-5">
          <div className="w-full">
            <label htmlFor="" className="text-base font-medium">
              Pais
            </label>
            <Input id="" name="" className="mt-1" />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-base font-medium">
              Estado
            </label>
            <Input id="" name="" className="mt-1" />
          </div>
        </div>

        <div className="mt-3 flex flex-row items-center gap-5">
          <div className="w-[200px]">
            <label htmlFor="" className="text-base font-medium">
              Cidade
            </label>
            <Input id="" name="" className="mt-1" />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-base font-medium">
              Bairro
            </label>
            <Input id="" name="" className="mt-1" />
          </div>
        </div>

        <div className="mt-3 flex flex-row items-center gap-5">
          <div className="w-full">
            <label htmlFor="" className="text-base font-medium">
              Rua
            </label>
            <Input id="" name="" className="mt-1" />
          </div>
          <div className="w-[100px]">
            <label htmlFor="" className="text-base font-medium">
              Número
            </label>
            <Input id="" name="" className="mt-1" />
          </div>
        </div>
      </fieldset>

      <div className="mt-3 flex items-center">
        <Checkbox id="accept" />
        <label htmlFor="accept" className="ml-2">
          Eu aceito as <strong>Políticas de Privacidade</strong> e os{' '}
          <strong>Termos de Uso</strong>
        </label>
      </div>
      <Button className="mt-6">Entrar</Button>
    </div>
  )
}
