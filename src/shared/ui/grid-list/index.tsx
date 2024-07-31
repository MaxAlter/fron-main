import React, { PropsWithChildren } from 'react'

import { classNames } from 'shared/utils'

import './styles.scss'

type Props = {
  className?: string
}

const GridList: React.FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return <div className={classNames('grid-list', className)}>{children}</div>
}

export default GridList
