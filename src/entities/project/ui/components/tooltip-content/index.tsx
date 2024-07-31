import { useUnit } from 'effector-react'
import React from 'react'

import { IconDiscountPercent, IconTicketFilled } from 'shared/assets/icons'
import { $$commonStore } from 'shared/stores'
import Typography from 'shared/ui/typography'

import './styles.scss'

const TooltipContent: React.FC = () => {
  const [options] = useUnit([$$commonStore.$options])

  return (
    <div className="project-tooltip-content">
      <div className="project-tooltip-content__row">
        <IconDiscountPercent
          width={16}
          height={16}
          className="project-tooltip-content__icon"
        />
        <Typography
          className="project-tooltip-content__text"
          tag="p"
          size="10"
          weight="700"
        >
          The price range of an asset depends on the
          <br /> discount provided within the current tier and the
          <br /> availability of discount vouchers applied to RWA NFTs.
        </Typography>
      </div>
      <div className="project-tooltip-content__row">
        <IconTicketFilled
          width={16}
          height={16}
          className="project-tooltip-content__icon"
        />
        <Typography
          className="project-tooltip-content__text"
          tag="p"
          size="10"
          weight="700"
        >
          Discount vouchers can be purchased or obtained in
          <br />{' '}
          <a
            href={options?.urls?.voucherUrl || '#'}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
          >
            DApp MMPro Bump
          </a>{' '}
          using MMPro Point, Ton or MMPro Token.
        </Typography>
      </div>
    </div>
  )
}

export default TooltipContent
