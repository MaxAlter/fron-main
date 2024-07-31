import { useUnit } from 'effector-react'
import React from 'react'

import { $$commonStore } from 'shared/stores'
import { ButtonPrimary } from 'shared/ui/buttons'

import './styles.scss'

const FooterContent: React.FC = () => {
  const [options] = useUnit([$$commonStore.$options])

  return (
    <a
      href={options?.urls.marketplaceUrl || '#'}
      rel="noreferrer"
      className="sell-nft-modal-action"
    >
      <ButtonPrimary size="xl">Go to the marketplace</ButtonPrimary>
    </a>
  )
}

export default FooterContent
