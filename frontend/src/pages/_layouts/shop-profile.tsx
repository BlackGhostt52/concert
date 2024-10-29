import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header/index'
import { Menubar } from '@/components/menubar'
import { GlobalProvider } from '../contexts/global-context'

export const ProfileLayout = function () {
  return (
    <GlobalProvider>
      <div className="flex flex-col items-center">
        <Header />
        <div className="mt-16 flex w-[1140px] flex-row">
          <Menubar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </GlobalProvider>
  )
}
