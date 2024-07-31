import React from 'react'

import { classNames } from 'shared/utils'

import ButtonBase, { BaseButtonProps } from '../base'
import './styles.scss'

type Variant = 'primary' | 'secondary' | 'third' | 'none'

type Size = 'm' | 'l' | 'xl'

export type ButtonPrimaryProps = {
  variant?: Variant
  size?: Size
} & BaseButtonProps

type Props = ButtonPrimaryProps

const ButtonPrimary: React.FC<Props> = ({
  variant = 'primary',
  size = 'm',
  className,
  children,
  ...rest
}) => {
  return (
    <ButtonBase
      {...rest}
      className={classNames(
        'button-primary',
        `button-primary_${variant}`,
        `button-primary_${size}`,
        className
      )}
    >
      {children}
    </ButtonBase>
  )
}

export default ButtonPrimary
