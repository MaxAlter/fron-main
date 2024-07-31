import React from 'react'

import { IconTonCoin } from 'shared/assets/icons'
import Typography, { Size, Tag, Weight } from 'shared/ui/typography'

import './styles.scss'

type Props = {
  min: ValueOrNull<string | number>
  max?: ValueOrNull<string | number>
  iconSize?: number
  text?: {
    tag?: Tag
    size?: Size
    weight?: Weight
  }
}

const Price: React.FC<Props> = ({
  min,
  max,
  iconSize = 20,
  text = { weight: '600', size: '14', variant: 'span' },
}) => {
  return (
    <div className="price">
      <IconTonCoin
        width={iconSize}
        height={iconSize}
      />
      <Typography
        tag={text?.tag}
        size={text?.size}
        weight={text?.weight}
      >
        {min} {max && ` - ${max}`}
      </Typography>
    </div>
  )
}

export default Price
