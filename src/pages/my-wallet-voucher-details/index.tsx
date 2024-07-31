import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { VoucherSell } from 'widgets/voucher'

import { VoucherDetailsCard } from 'entities/voucher'

import { palette } from 'shared/assets/styles'
import { CollectionNameEnum } from 'shared/enums'
import { WithActionsLayout } from 'shared/ui/layouts'
import Typography from 'shared/ui/typography'

import MyWalletVoucherDetailsPageSkeleton from './components/skeleton'
import { $details, $loading, pageReady } from './model.ts'
import './styles.scss'

const MyWalletVoucherDetailsPage: React.FC = () => {
  const params = useParams()

  const [details, loading] = useUnit([$details, $loading])

  useEffect(() => {
    if (params?.id) {
      pageReady(params.id)
    }
  }, [])

  if (loading) return <MyWalletVoucherDetailsPageSkeleton />

  return (
    <WithActionsLayout
      className="my-wallet-voucher-details-page"
      actionsContent={
        details && (
          <>
            <VoucherSell />
          </>
        )
      }
    >
      <div className="my-wallet-voucher-details-page__content">
        {details ? (
          <VoucherDetailsCard
            tier={details.name}
            discount={details.discountPercent}
            collection={CollectionNameEnum.LEDGER}
          />
        ) : (
          <div className="my-wallet-voucher-details-page__empty">
            <Typography
              tag="p"
              size="14"
              weight="500"
              color={palette['shuttle-gray']}
            >
              Failed to get Voucher details
            </Typography>
          </div>
        )}
      </div>
    </WithActionsLayout>
  )
}

export default MyWalletVoucherDetailsPage
