import React from 'react'

import { NftDetailsCardSkeleton } from 'entities/nft'
import { ProjectSkeleton } from 'entities/project'

import { WithActionsLayout } from 'shared/ui/layouts'
import Loader from 'shared/ui/loader'
import Skeleton from 'shared/ui/skeleton'

import './styles.scss'

const AssetDetailsPageSkeleton: React.FC = () => {
  return (
    <WithActionsLayout
      className="asset-details-skeleton"
      actionsContent={
        <>
          <Skeleton
            withOpacity
            width="100%"
            height={56}
            borderRadius={16}
          />
        </>
      }
    >
      <Loader absolute />
      <div className="asset-details-skeleton__project">
        <ProjectSkeleton short />
      </div>
      <div className="asset-details-skeleton__info">
        <NftDetailsCardSkeleton />
        <div className="asset-details-skeleton__row asset-details-skeleton_docs">
          <Skeleton
            withOpacity
            width={199}
            height={50}
            borderRadius={16}
          />
          <div className="asset-details-skeleton__row">
            <Skeleton
              withOpacity
              width={24}
              height={24}
              borderRadius={8}
            />
            <Skeleton
              withOpacity
              width={70}
              height={24}
            />
          </div>
        </div>
        <div className="asset-details-skeleton__price">
          <Skeleton
            withOpacity
            width={132}
            height={24}
          />

          <div className="asset-details-skeleton__row">
            <Skeleton
              withOpacity
              width={20}
              height={20}
              borderRadius="50%"
            />
            <Skeleton
              withOpacity
              width={55}
              height={20}
            />
          </div>
        </div>

        <div className="asset-details-skeleton__input">
          <Skeleton
            withOpacity
            width="100%"
            height={56}
            borderRadius={16}
          />
        </div>
      </div>
    </WithActionsLayout>
  )
}

export default AssetDetailsPageSkeleton
