import React from 'react'

import Skeleton from 'shared/ui/skeleton'

import './styles.scss'

type Props = {
  purchased?: boolean
}

const NftDetailsCardSkeleton: React.FC<Props> = ({ purchased = false }) => {
  return (
    <div className="nft-details-card-skeleton">
      <Skeleton
        width={130}
        height={20}
      />

      <div className="nft-details-card-skeleton__content">
        <div className="nft-details-card-skeleton__left">
          <Skeleton
            width={171}
            height={171}
            borderRadius={29}
            baseColor={`var(--pastel-blue)`}
          />
        </div>
        <div className="nft-details-card-skeleton__right">
          {purchased && (
            <>
              <Skeleton
                width={90}
                height={22}
              />
            </>
          )}
          <div className="nft-details-card-skeleton__col">
            <Skeleton
              width={90}
              height={14}
            />

            <div className="nft-details-card-skeleton__row">
              <Skeleton
                width={20}
                height={20}
                borderRadius="50%"
              />
              <Skeleton
                width={70}
                height={20}
              />
            </div>
          </div>
          <div className="nft-details-card-skeleton__col">
            <Skeleton
              width={120}
              height={14}
            />
            <Skeleton
              width={90}
              height={14}
            />
          </div>
          {!purchased && (
            <div className="nft-details-card-skeleton__col">
              <Skeleton
                width={95}
                height={14}
              />
              <Skeleton
                width={44}
                height={22}
                borderRadius={29}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NftDetailsCardSkeleton
