import { useUnit } from 'effector-react'
import React from 'react'
import { Control } from 'react-hook-form'

import { $$commonStore } from 'shared/stores'
import { TitleDescriptionLayout } from 'shared/ui/layouts'

import {
  AML_POLICY_NAME,
  DATA_PROTECTION_POLICY_NAME,
  INVESTOR_ACCREDITED_STATUS_NAME,
  REFUND_POLICY_NAME,
  TERMS_AND_CONDITIONS_NAME,
} from '../../../constants'
import ControlledCheckbox from '../controlled-checkbox'
import './styles.scss'

type Props = {
  control: Control
}

const Content: React.FC<Props> = ({ control }) => {
  const [options] = useUnit([$$commonStore.$options])

  return (
    <div className="review-docs-modal-content">
      <TitleDescriptionLayout
        className="review-docs-modal-content__title-description-layout"
        title="Documents"
        description="By checking the mark you confirmed that you read the document and agree to its terms"
      />

      <div className="review-docs-modal-content__form">
        <ControlledCheckbox
          name={AML_POLICY_NAME}
          control={control}
          linkUrl={options?.urls.amlPolicy}
        >
          AML Policy
        </ControlledCheckbox>

        <ControlledCheckbox
          name={DATA_PROTECTION_POLICY_NAME}
          control={control}
          linkUrl={options?.urls.dataProtectionPolicy}
        >
          Data Protection Policy
        </ControlledCheckbox>

        <ControlledCheckbox
          name={TERMS_AND_CONDITIONS_NAME}
          control={control}
          linkUrl={options?.urls.termsUrl}
        >
          Terms And Conditions
        </ControlledCheckbox>

        <ControlledCheckbox
          name={REFUND_POLICY_NAME}
          control={control}
          linkUrl={options?.urls.refundPolicy}
        >
          Refund Policy
        </ControlledCheckbox>

        <ControlledCheckbox
          name={INVESTOR_ACCREDITED_STATUS_NAME}
          control={control}
          linkUrl={options?.urls.investorAccreditedStatus}
        >
          Investor Accredited Status
        </ControlledCheckbox>
      </div>
    </div>
  )
}

export default Content
