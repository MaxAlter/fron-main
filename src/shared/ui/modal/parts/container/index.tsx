import React, { HTMLAttributes, PropsWithChildren } from 'react'

import { classNames } from 'shared/utils'

import './styles.scss'

type Props = HTMLAttributes<HTMLDivElement>

const ModalContainer: React.FC<PropsWithChildren<Props>> = ({ className, children, ...rest }) => {
  return (
    <div
      {...rest}
      className={classNames('modal-container', className)}
    >
      {children}
    </div>
  )
}

export default ModalContainer
