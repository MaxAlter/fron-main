import React, { HTMLAttributes, PropsWithChildren } from 'react'

import { classNames } from 'shared/utils'

import './styles.scss'

type Props = HTMLAttributes<HTMLDivElement>

const Card: React.FC<PropsWithChildren<Props>> = ({ className, children, ...rest }) => {
  return (
    <div
      className={classNames('card', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Card
