import React from 'react'

import { useActivationNftModal } from 'features/modals'

import { ButtonPrimary } from 'shared/ui/buttons'

const NftActivation: React.FC = () => {
  const nftActivationModal = useActivationNftModal()

  return (
    <ButtonPrimary
      size="xl"
      onClick={nftActivationModal.open}
    >
      Activation
    </ButtonPrimary>
  )
}

export default NftActivation
