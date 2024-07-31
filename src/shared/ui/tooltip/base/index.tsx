import React, { PropsWithChildren, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { PlacesType, Tooltip as TooltipComponent } from 'react-tooltip'

import './styles.scss'

export type TooltipProps = PropsWithChildren<{
  id: string
  triggerContent: ReactNode
  width?: string
  maxWidth?: string
  place?: PlacesType
  clickable?: boolean
}>

const Tooltip: React.FC<TooltipProps> = ({
  triggerContent,
  children,
  width,
  maxWidth,
  place,
  id,
  clickable,
}) => {
  const tooltipContainer = document.getElementById('tooltip-container')

  return (
    <div className="tooltip">
      <div
        id={id}
        className="tooltip__trigger"
      >
        {triggerContent}
      </div>

      {tooltipContainer
        ? createPortal(
            <TooltipComponent
              className="tooltip__content"
              anchorSelect={`#${id}`}
              style={{ width, maxWidth }}
              place={place}
              clickable={clickable}
              border="1px solid rgba(255, 255, 255, 0.08)"
            >
              {children}
            </TooltipComponent>,
            tooltipContainer
          )
        : null}
    </div>
  )
}

export default Tooltip
