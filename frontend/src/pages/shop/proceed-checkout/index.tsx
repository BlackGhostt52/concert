import { Helmet } from 'react-helmet-async'

import { Footer } from '@/components/footer/index.tsx'
import { Header } from '@/components/header/index.tsx'

import { Card } from './components/card'
import { Content } from './components/content'

export function ProceedCheckout () {
  return (
    <>
      <Helmet title="Prosseguir com o Checkout" />
      <div className="flex h-full w-full flex-col items-center">
        <Header />
        <div className="mb-20 flex w-[1140px] flex-row items-stretch gap-20">
          <Content />
          <Card />
        </div>
        <Footer />
      </div>
    </>
  )
}
