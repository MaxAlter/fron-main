import { TonConnectUIProvider } from '@tonconnect/ui-react'
import React, { useEffect } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import { RouterProvider } from 'app/providers'

import AppHeader from 'widgets/app-header'
import AppNavigation from 'widgets/app-navigation'
import Modal from 'widgets/modal'

import { routeAbsolutePaths } from 'shared/router'
import { BaseLayout } from 'shared/ui/layouts'

const App: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(routeAbsolutePaths?.assets, { replace: true })
    }
  }, [location, navigate])

  return (
    <TonConnectUIProvider manifestUrl={import.meta.env.VITE_TON_CONNECT_MANIFEST}>
      <BaseLayout
        header={<AppHeader />}
        footer={<AppNavigation />}
      >
        <RouterProvider />
      </BaseLayout>
      <Modal />
    </TonConnectUIProvider>
  )
}

export default App
