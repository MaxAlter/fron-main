import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'

import { classNames } from 'shared/utils'

import './styles.scss'

type Props = {
  closeActionContent?: ReactNode
} & HTMLAttributes<HTMLDivElement>

const ModalHeader: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
  closeActionContent,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={classNames('modal-header', className)}
    >
      <div className="modal-header__content">{children}</div>
      {closeActionContent}
    </div>
  )
}

export default ModalHeader
