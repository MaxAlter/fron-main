import React from 'react'

import { TooltipCommission } from 'features/tooltips'

import { TitleDescriptionLayout } from 'shared/ui/layouts'
import Typography from 'shared/ui/typography'

const Content: React.FC = () => {
  return (
    <div className="sell-nft-modal-content">
      <TitleDescriptionLayout
        title={
          <TooltipCommission>
            <Typography
              tag="h2"
              size="24"
              weight="700"
              lineHeight="32px"
              textAlign="center"
            >
              Selling RWA NFTs
            </Typography>
          </TooltipCommission>
        }
        description="You can sell your NFT on the marketplace. We charge a 5% commission on secondary sales"
      />
    </div>
  )
}

export default Content
