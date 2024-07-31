import { useUnit } from 'effector-react'

import { $$modalStore } from 'shared/stores'

import SuccessPurchaseModal from '../ui'

export const useSuccessPurchaseModal = () => {
  const [handleOpen] = useUnit([$$modalStore.open])

  const open = () => {
    handleOpen({
      content: <SuccessPurchaseModal />,
    })
  }

  return { open }
}
