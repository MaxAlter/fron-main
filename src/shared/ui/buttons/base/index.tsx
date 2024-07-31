import React, { HTMLAttributes, PropsWithChildren } from 'react'

import { classNames } from 'shared/utils'

import './styles.scss'

type Width = 'max-content' | string

type Type = 'submit' | 'reset' | 'button' | undefined

export type BaseButtonProps = {
  width?: Width
  disabled?: boolean
  type?: Type
} & PropsWithChildren<HTMLAttributes<HTMLButtonElement>>

const ButtonBase: React.FC<BaseButtonProps> = ({
  children,
  width = '100%',
  style,
  className,
  disabled,
  type = 'button',
  ...rest
}) => {
  return (
    <button
      {...rest}
      type={type}
      className={classNames('button-base', className)}
      style={{ width, ...style }}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default ButtonBase
