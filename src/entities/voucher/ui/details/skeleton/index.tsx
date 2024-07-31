import React from 'react'

import Skeleton from 'shared/ui/skeleton'

import './styles.scss'

const VoucherDetailsCardSkeleton: React.FC = () => {
  return (
    <div className="voucher-details-card-skeleton">
      <Skeleton
        width={130}
        height={20}
      />

      <div className="voucher-details-card-skeleton__content">
        <div className="voucher-details-card-skeleton__left">
          <Skeleton
            width={171}
            height={171}
            borderRadius={29}
            baseColor={`var(--light-blue)`}
          />
        </div>
        <div className="voucher-details-card-skeleton__right">
          <Skeleton
            width={90}
            height={22}
          />
          <div className="voucher-details-card-skeleton__col">
            <Skeleton
              width={120}
              height={14}
            />
            <Skeleton
              width={90}
              height={14}
            />
          </div>
          <div className="voucher-details-card-skeleton__col">
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
        </div>
      </div>
    </div>
  )
}

export default VoucherDetailsCardSkeleton
