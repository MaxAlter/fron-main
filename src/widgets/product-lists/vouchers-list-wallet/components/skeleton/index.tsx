import React from 'react'

import { VoucherSkeleton } from 'entities/voucher'

import GridList from 'shared/ui/grid-list'
import Loader from 'shared/ui/loader'

import './styles.scss'

const VouchersListWalletSkeleton: React.FC = () => {
  return (
    <div className="vouchers-list-wallet-skeleton">
      <Loader absolute />
      <GridList>
        <VoucherSkeleton />
        <VoucherSkeleton />
        <VoucherSkeleton />
        <VoucherSkeleton />
      </GridList>
    </div>
  )
}

export default VouchersListWalletSkeleton
