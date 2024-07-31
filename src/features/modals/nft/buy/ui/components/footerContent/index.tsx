import { beginCell, toNano } from '@ton/core'
import { useTonConnectUI } from '@tonconnect/ui-react'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'

import { $$modalStore } from 'shared/stores'
import { ButtonPrimary } from 'shared/ui/buttons'
// import { formatPercentageToHuman, subtractPercentageFromPrice } from 'shared/utils'

import { useSuccessPurchaseModal } from '../../../modals'
import { PurchaseSummary } from '../../../types'

type Props = {
  summary: PurchaseSummary
}

const FooterContent: React.FC<Props> = ({ summary }) => {
  const [closeModal] = useUnit([$$modalStore.close])
  const [isLoading, setLoading] = useState(false)
  const [tonConnectUI] = useTonConnectUI()
  // const price = subtractPercentageFromPrice(
  //   summary.price,
  //   formatPercentageToHuman(summary.discount)
  // )

  const successModal = useSuccessPurchaseModal()

  const handleClick = async () => {
    if (isLoading) return

    setLoading(true)

    try {
      const message = beginCell()
        .storeUint(0x1, 32) // opcode
        .storeUint(0, 64) // query id
        .storeUint(summary.tierCollectionId, 64) // tier index
        .storeCoins(toNano('0.05')) // min nft storage
        .endCell()

      try {
        await tonConnectUI.sendTransaction({
          validUntil: Date.now() + 5 * 60 * 1000,
          messages: [
            {
              address: summary.collectionAddress,
              amount: (BigInt(summary.price) + toNano('0.1')).toString(),
              payload: message.toBoc().toString('base64'),
            },
          ],
        })

        closeModal()

        successModal.open()
      } catch (exception) {
        console.error(exception)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <ButtonPrimary
      size="xl"
      disabled={isLoading}
      onClick={handleClick}
    >
      Buy RWA NFT
    </ButtonPrimary>
  )
}

export default FooterContent
