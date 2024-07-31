import { useIsConnectionRestored, useTonAddress } from '@tonconnect/ui-react'
import React, { PropsWithChildren } from 'react'

import ConnectWallet from 'features/connect-wallet'

import { TitleDescriptionLayout } from 'shared/ui/layouts'
import Loader from 'shared/ui/loader'

import './styles.scss'

const PrivateView: React.FC<PropsWithChildren> = ({ children }) => {
  const address = useTonAddress()
  const connectionRestored = useIsConnectionRestored()

  if (!connectionRestored) {
    return (
      <div className="private-view-restricted">
        <div>
          <TitleDescriptionLayout
            className="private-view-restricted__text"
            title="Provider loading"
          />
          <Loader />
        </div>
      </div>
    )
  }

  if (!address)
    return (
      <div className="private-view-restricted">
        <div>
          <TitleDescriptionLayout
            className="private-view-restricted__text"
            title="Connect Wallet"
            description="To view this section, connect your wallet"
          />
          <ConnectWallet />
        </div>
      </div>
    )

  return children
}

export default PrivateView
