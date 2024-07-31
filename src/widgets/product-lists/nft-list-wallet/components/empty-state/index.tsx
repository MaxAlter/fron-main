import React from 'react'
import { Link } from 'react-router-dom'

import { palette } from 'shared/assets/styles'
import { routeAbsolutePaths } from 'shared/router'
import { ButtonSecondary } from 'shared/ui/buttons'
import Typography from 'shared/ui/typography'

import './styles.scss'

const NftListWalletEmptyState: React.FC = () => {
  return (
    <div className="nft-list-wallet-empty-state">
      <div className="nft-list-wallet-empty-state__inner">
        <Typography
          tag="p"
          size="14"
          weight="500"
          color={palette['shuttle-gray']}
        >{`You don't have any NFT shares purchased yet`}</Typography>
        <Link to={routeAbsolutePaths.assets}>
          <ButtonSecondary width="max-content">Buy Assets</ButtonSecondary>
        </Link>
      </div>
    </div>
  )
}

export default NftListWalletEmptyState
