import React from 'react'

import { IconErrorWarning } from 'shared/assets/icons'
import { BadgeDiscount } from 'shared/ui/badges'
import Price from 'shared/ui/price'
import TitledContent from 'shared/ui/titled-content'
import { Tooltip, TooltipWrapper } from 'shared/ui/tooltip'
import Typography from 'shared/ui/typography'
import {
  classNames,
  formatNumberWithSpacing,
  formatPercentageToHuman,
  formatPriceFromNano,
  // subtractPercentageFromPrice,
} from 'shared/utils'

import TooltipContent from './components/tooltip-content'
import './styles.scss'

type Props = {
  value: string
  discount?: NumberOrNull
  voucher?: NumberOrNull
  className?: string
  showPromotions?: boolean
}

const TotalPrice: React.FC<Props> = ({
  value,
  discount,
  voucher,
  className,
  showPromotions = true,
}) => {
  // const priceValue = formatPriceFromNano(
  //   subtractPercentageFromPrice(
  //     value,
  //     formatPercentageToHuman(discount),
  //     formatPercentageToHuman(voucher)
  //   )
  // )

  const priceValue = formatPriceFromNano(value)

  return (
    <TitledContent
      className={classNames('total-price', className)}
      titleTextSettings={{ width: 'max-content' }}
      title={
        <TooltipWrapper
          tooltip={
            <Tooltip
              id={showPromotions ? 'total-price-with-promotions' : 'total-price'}
              triggerContent={
                <IconErrorWarning
                  width={14}
                  height={14}
                />
              }
            >
              <TooltipContent />
            </Tooltip>
          }
        >
          <Typography
            tag="span"
            size="14"
            weight="600"
            width="max-content"
            color={'#181833'}
          >
            Total price for RWA NFT
          </Typography>
        </TooltipWrapper>
      }
      content={
        <div className="total-price__row">
          <Price
            min={formatNumberWithSpacing(priceValue)}
            text={{ size: '20', weight: '700', tag: 'span' }}
          />
          {showPromotions && (
            <>
              {!!voucher && (
                <BadgeDiscount
                  value={formatPercentageToHuman(voucher)}
                  type="voucher"
                />
              )}
              {!!discount && (
                <BadgeDiscount
                  value={formatPercentageToHuman(discount)}
                  type="percentage"
                />
              )}
            </>
          )}
        </div>
      }
    />
  )
}

export default TotalPrice
