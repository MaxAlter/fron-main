import React from 'react'

import { ButtonPrimary } from 'shared/ui/buttons'

import './styles.scss'

const FooterContent: React.FC = () => {
  return (
    <div className="sell-voucher-modal-content">
      <ButtonPrimary size="xl">Buy or Receive</ButtonPrimary>
      {/* <ButtonPrimary
        size="xl"
        variant="secondary"
        className="sell-button"
      >
        Sell
      </ButtonPrimary> */}
    </div>
  )
}

export default FooterContent
