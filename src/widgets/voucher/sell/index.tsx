import React from 'react'

import { useSellVoucherModal } from 'features/modals'

import { ButtonPrimary } from 'shared/ui/buttons'

const VoucherSell: React.FC = () => {
  const voucherSellModal = useSellVoucherModal()

  return (
    <ButtonPrimary
      variant="secondary"
      size="xl"
      onClick={voucherSellModal.open}
    >
      Sell
    </ButtonPrimary>
  )
}

export default VoucherSell
