import React from 'react'

import { TitleDescriptionLayout } from 'shared/ui/layouts'

const Content: React.FC = () => {
  return (
    <div className="sell-vouhcer-modal-content">
      <TitleDescriptionLayout
        title="Voucher"
        description="You can buy or receive NFT vouchers for discounts in DApps MMPro Tap, as well as sell them on the NFT marketplace"
      />
    </div>
  )
}

export default Content
