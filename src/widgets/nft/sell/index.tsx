import React from 'react'

import { useSellNftModal } from 'features/modals'

import { ButtonPrimary } from 'shared/ui/buttons'

const NftSell: React.FC = () => {
  const nftSellModal = useSellNftModal()

  return (
    <ButtonPrimary
      variant="secondary"
      size="xl"
      onClick={nftSellModal.open}
    >
      Sell
    </ButtonPrimary>
  )
}

export default NftSell
