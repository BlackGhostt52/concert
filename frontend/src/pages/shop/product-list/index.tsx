import { Helmet } from 'react-helmet-async'

import { Footer } from '@/components/footer/index.tsx'
import { Header } from '@/components/header/index.tsx'
import { Navigation } from '@/components/navigation'

import { Filter } from './components/filter'
import { Main } from './components/main'

export function ProductList () {
  return (
    <>
      <Helmet title="Pesquisa de Produtos" />
      <div className="flex h-full w-full flex-col items-center">
        <Header />
        <div className="mt-14 flex flex-row gap-9">
          <div className="">
            <Navigation />
            <Filter />
          </div>
          <Main />
        </div>
        <Footer />
      </div>
    </>
  )
}
