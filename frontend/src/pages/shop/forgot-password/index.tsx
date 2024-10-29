import { Helmet } from 'react-helmet-async'

import { Content } from './components/content'
import { Image } from './components/image'

export function ForgotPassword() {
  return (
    <>
      <Helmet title="Recuperar senha" />
      <div className="flex h-full w-full flex-row items-center">
        <Image />
        <Content />
      </div>
    </>
  )
}
