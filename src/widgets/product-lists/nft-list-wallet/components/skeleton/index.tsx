import React from 'react'

import { NftSkeleton } from 'entities/nft'

import GridList from 'shared/ui/grid-list'
import Loader from 'shared/ui/loader'

import './styles.scss'

const NftListWalletSkeleton: React.FC = () => {
  return (
    <div className="nft-list-wallet-skeleton">
      <Loader absolute />
      <GridList>
        <NftSkeleton />
        <NftSkeleton />
        <NftSkeleton />
        <NftSkeleton />
      </GridList>
    </div>
  )
}

export default NftListWalletSkeleton
