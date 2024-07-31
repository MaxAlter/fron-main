import React, { PropsWithChildren, ReactNode, useLayoutEffect, useRef, useState } from 'react'

import { classNames } from 'shared/utils'

import './styles.scss'

type Props = {
  tooltip: ReactNode
  className?: string
}

const TooltipWrapper: React.FC<PropsWithChildren<Props>> = ({ tooltip, children, className }) => {
  const tooltipRef = useRef<ValueOrNull<HTMLDivElement>>(null)
  const [right, setRight] = useState<number>(0)

  useLayoutEffect(() => {
    getPosition()
  }, [tooltipRef.current])

  const getPosition = () => {
    if (tooltipRef.current) {
      const width = tooltipRef.current.getBoundingClientRect().width

      setRight(width + 4)
    }
  }

  return (
    <div className={classNames('tooltip-wrapper', className)}>
      <div
        ref={tooltipRef}
        className="tooltip-wrapper__tooltip"
        style={{ right: -right }}
      >
        {tooltip}
      </div>
      {children}
    </div>
  )
}

export default TooltipWrapper
