import { LoaderCircle } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { Logo } from '@/components/logo'

export function Verify() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  async function fakeFetch() {
    return new Promise((resolve) => setTimeout(resolve, 3000))
  }

  async function handleAuthVerify() {
    setIsLoading(true)
    await fakeFetch()

    navigate('/')
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
                Insira o código que enviamos por SMS
              </span>
            </div>
          </div>

          <div>
            <Label htmlFor="confirm-code">Insira o código</Label>
            <Input
              id="confirm-code"
              type="text"
              placeholder="Código de confirmação"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Button
              type="button"
              onClick={handleAuthVerify}
              disabled={isLoading}
              className="flex items-center justify-center"
            >
              {isLoading ? (
                <LoaderCircle className="size-5 animate-spin" />
              ) : (
                <span>Confirmar código</span>
              )}
            </Button>

            <Link
              to="/register"
              className="text-center text-zinc-500 underline"
            >
              Reenviar código
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}
