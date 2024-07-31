import { TonConnectButton } from '@tonconnect/ui-react'
import React from 'react'
import { Link } from 'react-router-dom'

import { IconLogo } from 'shared/assets/icons'
import { routeAbsolutePaths } from 'shared/router'

import './styles.scss'

const AppHeader: React.FC = () => {
  return (
    <header className="app-header">
      <Link to={routeAbsolutePaths.assets}>
        <IconLogo
          className="app-header__logo"
          width={141}
          height={40}
        />
      </Link>
      <TonConnectButton />
    </header>
  )
}

export default AppHeader
