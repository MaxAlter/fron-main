import React from 'react'

import { VoucherDetailsCardSkeleton } from 'entities/voucher'

import { WithActionsLayout } from 'shared/ui/layouts'
import Skeleton from 'shared/ui/skeleton'

const MyWalletVoucherDetailsPageSkeleton: React.FC = () => {
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
        </>
      }
    >
      <VoucherDetailsCardSkeleton />
    </WithActionsLayout>
  )
}

export default MyWalletVoucherDetailsPageSkeleton
