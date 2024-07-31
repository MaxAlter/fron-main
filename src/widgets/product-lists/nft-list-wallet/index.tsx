import { useTonAddress } from '@tonconnect/ui-react'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { NftCard } from 'entities/nft'

import { CollectionNameEnum } from 'shared/enums'
import { routeAbsolutePaths } from 'shared/router'
import { $$commonStore, $$walletAssetsStore } from 'shared/stores'
import GridList from 'shared/ui/grid-list'

import NftListWalletEmptyState from './components/empty-state'
import NftListWalletSkeleton from './components/skeleton'

const NftListWallet: React.FC = () => {
  const tonAddress = useTonAddress()
  const [nfts, loading] = useUnit([$$walletAssetsStore.$assets, $$walletAssetsStore.$loading])
  const [assetNfts, projectsLoading, assetsLoading] = useUnit([
    $$commonStore.$assets,
    $$commonStore.$projectsLoading,
    $$commonStore.$assetsLoading,
  ])

  useEffect(() => {
    if (assetNfts.length !== 0) {
      $$walletAssetsStore.ready({ address: tonAddress, refetch: true })
    }
  }, [assetNfts.length])

  if (projectsLoading || assetsLoading || loading) return <NftListWalletSkeleton />

  if (nfts.length === 0) return <NftListWalletEmptyState />

  return (
    <GridList className="nft-list-wallet">
      {nfts.map((item) => (
        <Link
          key={item.tokenId}
          to={`${routeAbsolutePaths.myWalletAssetDetails}/${item.contractAddress}/${item.tierCollectionId}`}
        >
          <NftCard
            purchased
            name={item.name}
            price={item.price}
            image={item.imageUrl}
            ipoCount={item.preIpoCount}
            collection={CollectionNameEnum.LEDGER}
          />
        </Link>
      ))}
    </GridList>
  )
}

export default NftListWallet
