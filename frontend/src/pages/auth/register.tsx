import { LoaderCircle } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { Logo } from '@/components/logo'

export function Register() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  async function delay() {
    return new Promise((resolve) => setTimeout(resolve, 3000))
  }

  async function handleRegister() {
    setIsLoading(true)

    await delay()

    navigate('/login/verify')
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="flex w-full items-center justify-center p-4">
        <form className="flex h-auto w-full flex-col gap-4 bg-white p-4 lg:max-w-[400px]">
          <div className="flex flex-col items-center gap-2">
            <Logo />

            <div className="text-center">
              <h1 className="text-2xl font-semibold text-zinc-700">e-Shopee</h1>

              <span className="text-zinc-500">
                Crie sua loja e comece suas vendas
              </span>
            </div>
          </div>

          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="text" placeholder="Digite seu e-mail" />
          </div>

          <div>
            <Label htmlFor="phone_num">Telefone</Label>
            <Input
              id="phone_num"
              type="tel"
              placeholder="Digite seu telefone"
            />
          </div>

          <div>
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="text" placeholder="Digite sua senha" />
          </div>

          <div className="flex flex-col gap-2">
            <Button
              type="button"
              onClick={handleRegister}
              disabled={isLoading}
              className="flex items-center justify-center"
            >
              {isLoading ? (
                <LoaderCircle className="size-5 animate-spin" />
              ) : (
                <span>Cadastrar</span>
              )}
            </Button>

            <Link to="/login" className="text-center text-zinc-500 underline">
              Já tem possuí conta?
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}
