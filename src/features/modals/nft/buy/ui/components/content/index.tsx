import React from 'react'

import { TotalPrice } from 'features/price'

import { palette } from 'shared/assets/styles'
import { CollectionNameEnum } from 'shared/enums'
import { BadgeDiscount } from 'shared/ui/badges'
// import Checkbox from 'shared/ui/checkbox'
import CollectionName from 'shared/ui/collection-name'
import { TitleDescriptionLayout } from 'shared/ui/layouts'
import TitledContent from 'shared/ui/titled-content'
import Typography from 'shared/ui/typography'
import { formatNumberWithSpacing, formatPercentageToHuman } from 'shared/utils'

// import UseVoucher from 'shared/ui/use-voucher'
import { PurchaseSummary } from '../../../types.ts'
import './styles.scss'

type Props = {
  summary: PurchaseSummary
}

const Content: React.FC<Props> = ({ summary }) => {
  return (
    <div className="buy-nft-modal-content">
      <TitleDescriptionLayout
        title="Buy NFT"
        description="Review Transaction Information and Confirm Purchase"
      />
      <div className="buy-nft-modal-content__info">
        <div className="buy-nft-modal-content__collection">
          <CollectionName type={CollectionNameEnum.LEDGER} />
        </div>
        <div className="buy-nft-modal-content__name">
          <Typography
            tag="h3"
            size="16"
            weight="700"
          >
            {summary.name}
          </Typography>
        </div>
        <div className="buy-nft-modal-content__ipo">
          <TitledContent
            titleTextSettings={{ color: palette.white }}
            title="Pre-IPO Assets"
            content={formatNumberWithSpacing(summary.ipoCount)}
          />
        </div>
        {!!summary.discount && (
          <div className="buy-nft-modal-content__discount">
            <BadgeDiscount value={formatPercentageToHuman(summary.discount)} />
            <Typography>Tier Discount</Typography>
          </div>
        )}
        {/* <div className="buy-nft-modal-content__voucher">*/}
        {/*  <Checkbox>*/}
        {/*    <UseVoucher discount={10000} />*/}
        {/*  </Checkbox>*/}
        {/*</div> */}
        <div className="buy-nft-modal-content__total">
          <TotalPrice
            showPromotions={false}
            value={summary.price}
            discount={summary.discount}
          />
        </div>
      </div>
    </div>
  )
}

export default Content
