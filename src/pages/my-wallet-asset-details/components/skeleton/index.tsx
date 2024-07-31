import React from 'react'

import { NftDetailsCardSkeleton } from 'entities/nft'

import { WithActionsLayout } from 'shared/ui/layouts'
import Loader from 'shared/ui/loader'
import Skeleton from 'shared/ui/skeleton'

const MyWalletAssetDetailsPageSkeleton: React.FC = () => {
  return (
    <WithActionsLayout
      actionsContent={
        <>
          <Skeleton
            withOpacity
            width="100%"
            height={56}
            borderRadius={16}
          />
          <Skeleton
            withOpacity
            width="100%"
            height={56}
            borderRadius={16}
          />
        </>
      }
    >
      <NftDetailsCardSkeleton />
      <Loader absolute />
    </WithActionsLayout>
  )
}

export default MyWalletAssetDetailsPageSkeleton
