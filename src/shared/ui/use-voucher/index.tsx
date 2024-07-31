import React from 'react'

import { IconTicketFilled } from 'shared/assets/icons'
import { palette } from 'shared/assets/styles'
import Typography from 'shared/ui/typography'

import './styles.scss'

type Props = {
  discount: number | string
}

const UseVoucher: React.FC<Props> = ({ discount }) => {
  return (
    <div className="use-voucher">
      <IconTicketFilled
        className="use-voucher__icon"
        width={24}
        height={24}
      />
      <Typography
        tag="p"
        size="14"
        className="use-voucher__text"
      >
        Use Voucher{' '}
        <Typography
          tag="span"
          size="14"
          weight="600"
          color={palette.shamrock}
        >
          {discount}% Sale
        </Typography>
      </Typography>
    </div>
  )
}

export default UseVoucher
