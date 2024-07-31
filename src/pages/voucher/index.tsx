import { useUnit } from 'effector-react'
import React from 'react'

import { ImageVoucherLogo } from 'shared/assets/images'
import { $$commonStore } from 'shared/stores'
import { ButtonPrimary } from 'shared/ui/buttons'
import { TitleDescriptionLayout, WithActionsLayout } from 'shared/ui/layouts'

import './styles.scss'

const VoucherPage: React.FC = () => {
  const [options] = useUnit([$$commonStore.$options])

  return (
    <WithActionsLayout
      className="voucher-page"
      actionsContent={
        <a
          href={options?.urls.voucherUrl || '#'}
          target="_blank"
          rel="noreferrer"
        >
          <ButtonPrimary size="xl">Buy or Receive</ButtonPrimary>
        </a>
      }
    >
      <div className="voucher-page__content">
        <TitleDescriptionLayout
          className="voucher-page__text"
          title="Voucher"
          description={
            <>
              You can exchange your accumulated points for RWA NFTs or discount vouchers.
              <br />
              Click the &quot;Buy or Receive&quot; button to go to the MMPro Bump app.
            </>
          }
        />

        <div className="voucher-page__logo">
          <img
            src={ImageVoucherLogo}
            alt="MMPo Logo"
          />
        </div>
      </div>
    </WithActionsLayout>
  )
}

export default VoucherPage
