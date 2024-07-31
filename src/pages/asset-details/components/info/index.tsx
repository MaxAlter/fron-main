import { useUnit } from 'effector-react'
import React from 'react'
import { useFormContext } from 'react-hook-form'

import { NftDetailsCard } from 'entities/nft'

import { NftModel } from 'shared/domain/nft'
import { $$commonStore } from 'shared/stores'
// import { FormCheckbox } from 'shared/form'
import { ButtonPrimary } from 'shared/ui/buttons'
import Checkbox from 'shared/ui/checkbox'
import Typography from 'shared/ui/typography'

// import UseVoucher from 'shared/ui/use-voucher'
// import { formatPercentageToHuman } from 'shared/utils'
import { useReviewDocsModal } from '../modals/review-docs'
import './styles.scss'

type Props = {
  asset: NftModel
  allDocumentsIsChecked: boolean
  onChangeReviewed: () => void
}

const Info: React.FC<Props> = ({ asset, allDocumentsIsChecked, onChangeReviewed }) => {
  const [remainings] = useUnit([$$commonStore.$remainings])
  const { control } = useFormContext()

  const reviewDocsModal = useReviewDocsModal(control)

  const remainingCount = remainings.find((item) => item.tierId === asset.tierCollectionId)

  return (
    <div className="asset-details-page-info">
      <NftDetailsCard
        name={asset.name}
        price={asset.price}
        image={asset.imageUrl}
        ipoCount={asset.preIpoCount}
        discount={asset.discountPercent}
        remainCount={remainingCount?.preIpoRemainsCount}
      />
      {/*<div className="asset-details-page-info__voucher">*/}
      {/*  <FormCheckbox name={FIELD_NAMES.VOUCHER}>*/}
      {/*    <UseVoucher discount={formatPercentageToHuman(1000)} />*/}
      {/*  </FormCheckbox>*/}
      {/*</div>*/}
      <div className="asset-details-page-info__documents">
        <ButtonPrimary
          variant="third"
          size="l"
          onClick={reviewDocsModal.open}
        >
          <Typography
            size="14"
            tag="span"
            weight="500"
          >
            Review the documents
          </Typography>
        </ButtonPrimary>
        <Checkbox
          checked={allDocumentsIsChecked}
          onChange={onChangeReviewed}
        >
          <Typography
            size="14"
            tag="span"
            weight="500"
          >
            Reviewed
          </Typography>
        </Checkbox>
      </div>
    </div>
  )
}

export default Info
