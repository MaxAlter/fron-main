import React from 'react'

import { IconCloseCircle } from 'shared/assets/icons'
import { TitleDescriptionLayout } from 'shared/ui/layouts'
import Typography from 'shared/ui/typography'

import { InsufficientFundsProps } from '../../../types'
import './styles.scss'

const Content: React.FC<InsufficientFundsProps> = ({ title }) => {
  return (
    <div className="insufficient-funds-modal-content">
      <TitleDescriptionLayout
        title={title}
        description={
          <div className="insufficient-funds-modal-content__description">
            <IconCloseCircle
              width={20}
              height={20}
              className="insufficient-funds-modal-content__icon"
            />
            <Typography
              tag="p"
              size="16"
              weight="500"
            >
              Insufficient funds for purchase
            </Typography>
          </div>
        }
      />
    </div>
  )
}

export default Content
