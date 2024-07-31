import React, { PropsWithChildren } from 'react'

import { IconErrorWarning } from 'shared/assets/icons'
import { Tooltip, TooltipWrapper } from 'shared/ui/tooltip'
import Typography from 'shared/ui/typography'

import './styles.scss'

type Props = {
  id?: string
}

const TooltipCommission: React.FC<PropsWithChildren<Props>> = ({
  id = 'selling-commission',
  children,
}) => {
  return (
    <TooltipWrapper
      className="selling-commission-tooltip"
      tooltip={
        <Tooltip
          id={id}
          triggerContent={
            <IconErrorWarning
              width={14}
              height={14}
              className="selling-commission-tooltip__icon"
            />
          }
        >
          <div className="selling-commission-tooltip__tooltip-content">
            <Typography
              tag="p"
              size="14"
              lineHeight="25px"
              className="selling-commission-tooltip__tooltip-content-text"
            >
              <span>5% commission</span> will be charged
              <br />
              from your sales plus <br />
              Getgems’ fee.
            </Typography>
          </div>
        </Tooltip>
      }
    >
      {children}
    </TooltipWrapper>
  )
}

export default TooltipCommission
