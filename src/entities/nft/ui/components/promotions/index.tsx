import React from 'react'

import { BadgeDiscount, BadgePcs } from 'shared/ui/badges'

import './styles.scss'

type Props = {
  pcs?: ValueOrNull<number | string>
  discount?: NumberOrNull
}

const Promotions: React.FC<Props> = ({ pcs, discount }) => {
  if (!pcs && !discount) return null

  return (
    <div className="tier-promotions">
      {!!discount && (
        <BadgeDiscount
          value={discount}
          className="tier-promotions__discount"
        />
      )}
      {!!pcs && (
        <BadgePcs
          value={pcs}
          className="tier-promotions__pcs"
        />
      )}
    </div>
  )
}

export default Promotions
