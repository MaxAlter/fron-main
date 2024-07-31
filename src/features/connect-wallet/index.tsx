import { useTonConnectModal } from '@tonconnect/ui-react'
import React from 'react'

import { ButtonConnectWallet } from 'shared/ui/buttons'

const ConnectWallet: React.FC = () => {
  const tonConnectModal = useTonConnectModal()

  return (
    <ButtonConnectWallet
      size="xl"
      onClick={tonConnectModal.open}
    />
  )
}

export default ConnectWallet
