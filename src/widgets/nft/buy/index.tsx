import { useTonAddress } from '@tonconnect/ui-react'
import React, { useState } from 'react'

import ConnectWallet from 'features/connect-wallet'
import { PurchaseSummary, useBuyNftModal, useInsufficientFundsModal } from 'features/modals'

import { useUserBalanceMorePrice } from 'shared/hooks'
import { ButtonPrimary } from 'shared/ui/buttons'
// import { formatPercentageToHuman, subtractPercentageFromPrice } from 'shared/utils'

type Props = {
  summary: PurchaseSummary
  disabled?: boolean
  onBuy: (openModal: () => void) => void
}

const NftBuy: React.FC<Props> = ({ disabled, onBuy, summary }) => {
  const [isLoading, setLoading] = useState(false)

  const tonAddress = useTonAddress()

  const nftBuyModal = useBuyNftModal()
  const insufficientFundsModal = useInsufficientFundsModal()

  const canBuy = useUserBalanceMorePrice()
  // const price = subtractPercentageFromPrice(
  //   summary.price,
  //   formatPercentageToHuman(summary.discount)
  // )

  const handleOpenModal = () => {
    nftBuyModal.open({ summary })
  }

  const handleBuy = async () => {
    if (isLoading) return

    setLoading(true)

    try {
      const isCanBuy = await canBuy(summary.price)

      if (!isCanBuy) {
        return insufficientFundsModal.open({ title: 'Buy NFT' })
      }

      onBuy(handleOpenModal)
    } finally {
      setLoading(false)
    }
  }

  if (!tonAddress) {
    return <ConnectWallet />
  }

  return (
    <ButtonPrimary
      size="xl"
      disabled={disabled || isLoading}
      onClick={handleBuy}
    >
      Buy
    </ButtonPrimary>
  )
}

export default NftBuy
