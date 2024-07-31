import React, { PropsWithChildren, ReactNode } from 'react'

import { classNames } from 'shared/utils'

import './styles.scss'

type Props = {
  className?: string
  actionsContent?: ReactNode
}

const WithActionsLayout: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
  actionsContent,
}) => {
  return (
    <div className={classNames('with-actions-layout', className)}>
      <div className="with-actions-layout__content">{children}</div>
      {actionsContent && <div className="with-actions-layout__actions">{actionsContent}</div>}
    </div>
  )
}

export default WithActionsLayout
