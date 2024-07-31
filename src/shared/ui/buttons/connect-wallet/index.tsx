import React from 'react'

import { IconTelegramPlain } from 'shared/assets/icons'
import { classNames } from 'shared/utils'

import ButtonPrimary, { ButtonPrimaryProps } from '../primary'
import './styles.scss'

type Props = Omit<ButtonPrimaryProps, 'variant' | 'color' | 'children'>

const ButtonConnectWallet: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <ButtonPrimary
      {...rest}
      className={classNames('button-connect-wallet', className)}
    >
      <IconTelegramPlain
        width={24}
        height={24}
      />
      Connect Wallet
    </ButtonPrimary>
  )
}

export default ButtonConnectWallet
