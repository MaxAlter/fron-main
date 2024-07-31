import React from 'react'

import { palette } from 'shared/assets/styles'
import Typography from 'shared/ui/typography'

import './styles.scss'

const VouchersListWalletEmptyState: React.FC = () => {
  return (
    <div className="vouchers-list-wallet-empty-state">
      <div className="vouchers-list-wallet-empty-state__inner">
        <Typography
          tag="p"
          size="14"
          weight="500"
          color={palette['shuttle-gray']}
        >{`You don't have any Vouchers purchased yet`}</Typography>
      </div>
    </div>
  )
}

export default VouchersListWalletEmptyState
