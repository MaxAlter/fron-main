import React from 'react'

import { IconErrorWarningLine } from 'shared/assets/icons'
import { BadgeDiscount } from 'shared/ui/badges'
import Typography from 'shared/ui/typography'

import './styles.scss'

const TooltipContent: React.FC = () => {
  return (
    <div className="total-price-tooltip-content">
      <div className="total-price-tooltip-content__col">
        <div className="total-price-tooltip-content__row">
          <BadgeDiscount
            type="voucher"
            value={0}
          />
          <BadgeDiscount
            type="percentage"
            value={0}
          />
        </div>
        <Typography
          className="total-price-tooltip-content__text"
          tag="p"
          size="10"
          weight="700"
        >
          The final price includes the activated voucher
          <br /> and tier discount
        </Typography>
      </div>

      <div className="total-price-tooltip-content__col">
        <div className="total-price-tooltip-content__row">
          <IconErrorWarningLine
            width={22}
            height={22}
            className="total-price-tooltip-content__icon"
          />
        </div>
        <Typography
          className="total-price-tooltip-content__text"
          tag="p"
          size="10"
          weight="700"
        >
          The activated voucher is voided upon RWA NFT
          <br /> price purchase
        </Typography>
      </div>
    </div>
  )
}

export default TooltipContent
