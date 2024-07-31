import React from 'react'

import { classNames } from 'shared/utils'

import ButtonBase, { BaseButtonProps } from '../base'
import './styles.scss'

type Variant = 'primary' | 'ghost'

type Props = {
  variant?: Variant
}

const ButtonSecondary: React.FC<Props & BaseButtonProps> = ({
  className,
  children,
  variant = 'primary',
  ...rest
}) => {
  return (
    <ButtonBase
      {...rest}
      className={classNames('button-secondary', `button-secondary_${variant}`, className)}
    >
      {children}
    </ButtonBase>
  )
}

export default ButtonSecondary
