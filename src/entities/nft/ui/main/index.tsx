import React from 'react'

import CollectionName from 'shared/ui/collection-name'
import { ProductVerticalLayout } from 'shared/ui/layouts'
import Price from 'shared/ui/price'
import TitledContent from 'shared/ui/titled-content'
import Typography from 'shared/ui/typography'
import { formatNumberWithSpacing, formatPercentageToHuman, formatPriceFromNano } from 'shared/utils'

import { INft } from '../../model'
import Promotions from '../components/promotions'
import './styles.scss'

type Props = INft

const NftCard: React.FC<Props> = ({
  name,
  price,
  image,
  ipoCount,
  remainCount,
  discount,
  collection,
  purchased,
}) => {
  return (
    <ProductVerticalLayout
      imageUrl={image}
      className="nft-card"
      innerTopContent={
        <Promotions
          pcs={formatNumberWithSpacing(remainCount)}
          discount={formatPercentageToHuman(discount)}
        />
      }
    >
      <div className="nft-card__content">
        {collection && (
          <CollectionName
            className="nft-card__collection-name"
            type={collection}
          />
        )}
        <Typography
          tag="h3"
          weight="700"
          size="16"
        >
          {name}
        </Typography>
        <TitledContent
          title={purchased ? 'Purchase price' : 'NFT Price'}
          content={<Price min={formatNumberWithSpacing(formatPriceFromNano(price))} />}
        />
        <TitledContent
          title="Pre-IPO Assets"
          content={ipoCount ? formatNumberWithSpacing(ipoCount) : 0}
        />
      </div>
    </ProductVerticalLayout>
  )
}

export default NftCard
