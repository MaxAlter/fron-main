import React, { PropsWithChildren } from 'react'

import { classNames } from 'shared/utils'

import './styles.scss'

type Type = 'primary' | 'secondary'

export type BadgeProps = {
  className?: string
}

type Props = {
  type?: Type
}

const Badge: React.FC<PropsWithChildren<Props & BadgeProps>> = ({
  type = 'primary',
  children,
  className,
}) => {
  return <div className={classNames('badge', `badge_${type}`, className)}>{children}</div>
}

export default Badge
