import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { VoucherCard } from 'entities/voucher'

import { CollectionNameEnum } from 'shared/enums'
import { routeAbsolutePaths } from 'shared/router'
import GridList from 'shared/ui/grid-list'

import VouchersListWalletEmptyState from './components/empty-state'
import VouchersListWalletSkeleton from './components/skeleton'
import { $loading, $vouchers, componentReady } from './model.ts'

const VouchersListWallet: React.FC = () => {
  const [vouchers, loading] = useUnit([$vouchers, $loading])

  useEffect(() => {
    componentReady()
  }, [])

  if (loading) return <VouchersListWalletSkeleton />

  if (vouchers.length === 0) return <VouchersListWalletEmptyState />

  return (
    <GridList className="vouchers-list-wallet">
      {vouchers.map((item) => (
        <Link
          key={item.id}
          to={`${routeAbsolutePaths.myWalletVoucherDetails}/${item.id}`}
        >
          <VoucherCard
            tier={item.name}
            discount={item.discountPercent}
            collection={CollectionNameEnum.LEDGER}
          />
        </Link>
      ))}
    </GridList>
  )
}

export default VouchersListWallet
