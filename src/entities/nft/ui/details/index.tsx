import React from 'react'

import { BadgeDiscount } from 'shared/ui/badges'
import CollectionName from 'shared/ui/collection-name'
import { ProductHorizontalLayout } from 'shared/ui/layouts'
import Price from 'shared/ui/price'
import TitledContent from 'shared/ui/titled-content'
import Typography from 'shared/ui/typography'
import { formatNumberWithSpacing, formatPercentageToHuman, formatPriceFromNano } from 'shared/utils'

import { INft } from '../../model'
import Promotions from '../components/promotions'
import './styles.scss'

type Props = INft

const NftDetailsCard: React.FC<Props> = ({
  name,
  image,
  price,
  ipoCount,
  remainCount,
  discount,
  collection,
}) => {
  return (
    <ProductHorizontalLayout
      imageUrl={image}
      className="nft-details-card"
      aboveSectionContent={
        <Typography
          tag="h3"
          weight="700"
          size="16"
        >
          {name}
        </Typography>
      }
      innerMediaContent={<Promotions pcs={formatNumberWithSpacing(remainCount)} />}
    >
      <div className="nft-details-card__content">
        {collection && (
          <div className="nft-details-card__collection">
            <CollectionName type={collection} />
          </div>
        )}
        <TitledContent
          title="NFT Price"
          content={<Price min={formatNumberWithSpacing(formatPriceFromNano(price))} />}
        />
        <TitledContent
          title="Pre-IPO Assets"
          content={ipoCount ? formatNumberWithSpacing(ipoCount) : 0}
        />
        {!!discount && (
          <TitledContent
            title="Tier Discount"
            content={<BadgeDiscount value={formatPercentageToHuman(discount)} />}
          />
        )}
      </div>
    </ProductHorizontalLayout>
  )
}

export default NftDetailsCard
