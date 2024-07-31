import { useTonAddress } from '@tonconnect/ui-react'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { NftActivation, NftSell } from 'widgets/nft'

import { NftDetailsCard } from 'entities/nft'

import { palette } from 'shared/assets/styles'
import { CollectionNameEnum } from 'shared/enums'
import { $$commonStore, $$walletAssetsStore } from 'shared/stores'
import { WithActionsLayout } from 'shared/ui/layouts'
import Typography from 'shared/ui/typography'

import MyWalletAssetDetailsPageSkeleton from './components/skeleton'
import './styles.scss'

const MyWalletAssetDetailsPage: React.FC = () => {
  const params = useParams()
  const tonAddress = useTonAddress()

  const [details, pageLoading] = useUnit([
    $$walletAssetsStore.$details,
    $$walletAssetsStore.$loading,
  ])

  const [assetNfts, projectsLoading, assetsLoading] = useUnit([
    $$commonStore.$assets,
    $$commonStore.$projectsLoading,
    $$commonStore.$assetsLoading,
  ])

  useEffect(() => {
    if (params.tokenId && assetNfts.length !== 0) {
      $$walletAssetsStore.ready({ address: tonAddress, tokenId: params.tokenId })
    }
  }, [assetNfts.length])

  if (projectsLoading || assetsLoading || pageLoading) return <MyWalletAssetDetailsPageSkeleton />

  return (
    <WithActionsLayout
      className="my-wallet-asset-details-page"
      actionsContent={
        details && (
          <>
            <NftActivation />
            <NftSell />
          </>
        )
      }
    >
      <div className="my-wallet-asset-details-page__content">
        {details ? (
          <NftDetailsCard
            name={details.name}
            price={details.price}
            image={details.imageUrl}
            ipoCount={details.preIpoCount}
            collection={CollectionNameEnum.LEDGER}
          />
        ) : (
          <div className="my-wallet-asset-details-page__empty">
            <Typography
              tag="p"
              size="14"
              weight="500"
              color={palette['shuttle-gray']}
            >
              Failed to get NFT details
            </Typography>
          </div>
        )}
      </div>
    </WithActionsLayout>
  )
}

export default MyWalletAssetDetailsPage
