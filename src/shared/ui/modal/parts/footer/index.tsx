import React, { HTMLAttributes, PropsWithChildren } from 'react'

import { classNames } from 'shared/utils'

import './styles.scss'

type Props = HTMLAttributes<HTMLDivElement>

const ModalFooter: React.FC<PropsWithChildren<Props>> = ({ className, children, ...rest }) => {
  return (
    <div
      {...rest}
      className={classNames('modal-footer', className)}
    >
      {children}
    </div>
  )
}

export default ModalFooter
