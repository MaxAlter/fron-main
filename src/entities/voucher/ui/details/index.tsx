import React from 'react'

import { ImageVoucherTest } from 'shared/assets/images'
import { BadgeDiscount } from 'shared/ui/badges'
import CollectionName from 'shared/ui/collection-name'
import { ProductHorizontalLayout } from 'shared/ui/layouts'
import TitledContent from 'shared/ui/titled-content'
import Typography from 'shared/ui/typography'
import { formatPercentageToHuman } from 'shared/utils'

import { IVoucher } from '../../model'
import './styles.scss'

type Props = IVoucher

const VoucherDetailsCard: React.FC<Props> = ({ tier, discount, collection }) => {
  return (
    <ProductHorizontalLayout
      imageUrl={ImageVoucherTest}
      className="voucher-details-card"
      aboveSectionContent={
        <Typography
          tag="h3"
          weight="700"
          size="16"
        >
          Voucher
        </Typography>
      }
    >
      <div className="voucher-details-card__content">
        <div className="voucher-details-card__collection">
          <CollectionName type={collection} />
        </div>
        <TitledContent
          contentTextSettings={{ tag: 'span' }}
          title="Tier"
          content={tier}
        />
        <TitledContent
          title="Discount"
          content={<BadgeDiscount value={formatPercentageToHuman(discount)} />}
        />
      </div>
    </ProductHorizontalLayout>
  )
}

export default VoucherDetailsCard
