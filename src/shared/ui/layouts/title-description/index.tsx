import React, { ReactNode } from 'react'

import { palette } from 'shared/assets/styles'
import Typography from 'shared/ui/typography'
import { classNames } from 'shared/utils'

import './styles.scss'

type Props = {
  title: ReactNode
  description?: ReactNode
  className?: string
}

const TitleDescriptionLayout: React.FC<Props> = ({ className, title, description }) => {
  return (
    <div className={classNames('title-description-layout', className)}>
      <Typography
        size="24"
        tag="h2"
        weight="700"
      >
        {title}
      </Typography>
      <Typography
        size="16"
        weight="500"
        tag="div"
        color={palette['regent-gray']}
      >
        {description}
      </Typography>
    </div>
  )
}

export default TitleDescriptionLayout
