import { useUnit } from 'effector-react'

import { $$modalStore } from 'shared/stores'

import ActivationNftModal from '../ui'

export const useActivationNftModal = () => {
  const [handleOpen] = useUnit([$$modalStore.open])

  const open = () => {
    handleOpen({
      content: <ActivationNftModal />,
    })
  }

  return { open }
}
