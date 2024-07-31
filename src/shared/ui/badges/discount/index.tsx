import React, { ComponentType, ReactNode, SVGProps } from 'react'

import { IconDiscountPercent, IconTicketFilled } from 'shared/assets/icons'
import Typography from 'shared/ui/typography'
import { classNames } from 'shared/utils'

import Badge, { BadgeProps } from '../base'
import './styles.scss'

type Type = 'percentage' | 'voucher'

type Props = {
  value: ReactNode
  type?: Type
}

const getIconByType = (type: Type) => {
  switch (type) {
    case 'percentage':
      return IconDiscountPercent
    case 'voucher':
      return IconTicketFilled

    default:
      return null
  }
}

const BadgeDiscount: React.FC<Props & BadgeProps> = ({ value, className, type = 'percentage' }) => {
  const IconComponent = getIconByType(type) as ComponentType<SVGProps<SVGSVGElement>>

  return (
    <Badge
      type="primary"
      className={classNames(
        'badge-discount',
        !value ? 'badge-discount_empty' : undefined,
        className
      )}
    >
      <IconComponent
        width={16}
        height={16}
      />

      {!!value && (
        <Typography
          tag="p"
          size="12"
          weight="700"
        >
          {value}%
        </Typography>
      )}
    </Badge>
  )
}

export default BadgeDiscount
