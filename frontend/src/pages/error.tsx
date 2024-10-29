import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold text-zinc-700">
        Whoops, algo aconteceu...
      </h1>
      <p className="text-zinc-500">
        Um erro aconteceu na aplicação, abaixo você encontra mais detalhes:
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-zinc-500">
        Voltar para a{' '}
        <Link to="/" className="text-blue-500">
          Home
        </Link>
      </p>
    </div>
  )
}
