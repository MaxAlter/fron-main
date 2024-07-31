import React from 'react'

import { ImageVoucherTest } from 'shared/assets/images'
import { BadgeDiscount } from 'shared/ui/badges'
import CollectionName from 'shared/ui/collection-name'
import { ProductVerticalLayout } from 'shared/ui/layouts'
import TitledContent from 'shared/ui/titled-content'
import Typography from 'shared/ui/typography'
import { formatPercentageToHuman } from 'shared/utils'

import { IVoucher } from '../../model'
import './styles.scss'

type Props = IVoucher

const VoucherCard: React.FC<Props> = ({ tier, discount, collection }) => {
  return (
    <ProductVerticalLayout
      imageUrl={ImageVoucherTest}
      className="voucher-card"
    >
      <div className="voucher-card__content">
        <CollectionName
          className="voucher-card__collection-name"
          type={collection}
        />
        <Typography
          tag="h3"
          weight="700"
          size="16"
        >
          Voucher
        </Typography>
        <TitledContent
          contentTextSettings={{ tag: 'span', size: '14' }}
          title="Tier"
          content={tier}
        />
        <TitledContent
          title="Discount"
          content={<BadgeDiscount value={formatPercentageToHuman(discount)} />}
        />
      </div>
    </ProductVerticalLayout>
  )
}

export default VoucherCard
