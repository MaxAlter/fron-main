import { useUnit } from 'effector-react'
import React from 'react'

import { IconYoutube } from 'shared/assets/icons'
import { FormTextInput } from 'shared/form'
import { $$commonStore } from 'shared/stores'
import { ButtonPrimary } from 'shared/ui/buttons'
import { TitleDescriptionLayout } from 'shared/ui/layouts'

import { FIELD_NAMES } from '../../../form/types'
import './styles.scss'

const Content: React.FC = () => {
  const [options] = useUnit([$$commonStore.$options])

  return (
    <div className="activation-nft-modal-content">
      <TitleDescriptionLayout
        className="activation-nft-modal-content__text"
        title="NFT Activation"
        description="An email will be sent for registration in the MMPro Trust personal account"
      />

      {options?.urls.activationVideoUrl && (
        <div className="activation-nft-modal-content__instruction">
          <a
            href={options.urls.activationVideoUrl}
            target="_blank"
            rel="noreferrer"
          >
            <ButtonPrimary
              className="activation-nft-modal-content__instruction-inner"
              variant="none"
              width="max-content"
              size="m"
            >
              <IconYoutube
                width={150}
                height={40}
              />
            </ButtonPrimary>
          </a>
        </div>
      )}

      <FormTextInput
        name={FIELD_NAMES.EMAIL}
        placeholder="Enter email"
        className="nft-action-email"
      />
    </div>
  )
}

export default Content
