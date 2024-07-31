import React from 'react'

import { palette } from 'shared/assets/styles'
import Typography from 'shared/ui/typography'

import './styles.scss'

const EmptyState: React.FC = () => {
  return (
    <div className="asset-details-page-empty">
      <Typography
        tag="p"
        size="14"
        weight="500"
        color={palette['shuttle-gray']}
      >
        Failed to get NFT details
      </Typography>
    </div>
  )
}

export default EmptyState
