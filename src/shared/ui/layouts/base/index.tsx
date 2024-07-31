import React, { PropsWithChildren, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import { classNames } from 'shared/utils'

import './styles.scss'

type Props = {
  className?: string
  header?: ReactNode
  footer?: ReactNode
  outside?: ReactNode
  
}

const BaseLayout: React.FC<PropsWithChildren<Props>> = ({
  className,
  header,
  footer,
  children,
  outside,
}) => {
  const isStub = false;
  return (
    <>
      {outside}
      <div className={classNames('base-layout', className)}>
        {header && <div className="base-layout__header">{header}</div>}
        <main className="base-layout__content">
          {isStub ? <Outlet /> : children}
        </main>
        {footer && <div className="base-layout__footer">{footer}</div>}
      </div>
    </>
  )
}

export default BaseLayout
