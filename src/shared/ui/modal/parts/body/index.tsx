import React, { HTMLAttributes, PropsWithChildren } from 'react'

import { classNames } from 'shared/utils'

import './styles.scss'

type Props = HTMLAttributes<HTMLDivElement>

const ModalBody: React.FC<PropsWithChildren<Props>> = ({ className, children, ...rest }) => {
  return (
    <div
      {...rest}
      className={classNames('modal-body', className)}
    >
      {children}
    </div>
  )
}

export default ModalBody
