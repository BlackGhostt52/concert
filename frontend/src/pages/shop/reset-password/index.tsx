import { Helmet } from 'react-helmet-async'

import { Content } from './components/content'
import { Image } from './components/image'

export function ResetPassword () {
  return (
    <>
      <Helmet title="Resetar a senha" />
      <div className="flex h-full w-full flex-row items-center">
        <Image />
        <Content />
      </div>
    </>
  )
}
