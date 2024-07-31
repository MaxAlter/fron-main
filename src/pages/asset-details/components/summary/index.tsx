import React from 'react'

import { TotalPrice } from 'features/price'

import { NftModel } from 'shared/domain/nft'
import { FormTextInput } from 'shared/form'

import { FIELD_NAMES } from '../../form/types'
import './styles.scss'

type Props = {
  asset: NftModel
}

const Summary: React.FC<Props> = ({ asset }) => {
  return (
    <div className="asset-details-page-info-summary">
      <TotalPrice
        value={asset.price}
        discount={asset.discountPercent}
        className="asset-details-page-info-summary__total-price"
      />
      <FormTextInput
        type="email"
        name={FIELD_NAMES.EMAIL}
        placeholder="E-mail"
      />
    </div>
  )
}

export default Summary
