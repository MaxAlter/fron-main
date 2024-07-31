import React, { ReactNode } from 'react'

import { IconArchiveStack } from 'shared/assets/icons'
import Typography from 'shared/ui/typography'
import { classNames } from 'shared/utils'

import Badge, { BadgeProps } from '../base'
import './styles.scss'

type Props = {
  value: ReactNode
}

const BadgePcs: React.FC<Props & BadgeProps> = ({ value, className }) => {
  return (
    <Badge
      type="secondary"
      className={classNames('badge-pcs', className)}
    >
      <IconArchiveStack
        width={16}
        height={16}
      />

      <Typography
        tag="p"
        size="12"
        weight="700"
      >
        {value}
      </Typography>
      <Typography
        tag="span"
        size="8"
        weight="700"
      >
        pcs
      </Typography>
    </Badge>
  )
}

export default BadgePcs
