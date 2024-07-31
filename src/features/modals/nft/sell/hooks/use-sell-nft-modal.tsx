import { useUnit } from 'effector-react'

import { $$modalStore } from 'shared/stores'

import SellNftModal from '../ui'

export const useSellNftModal = () => {
  const [handleOpen] = useUnit([$$modalStore.open])

  const open = () => {
    handleOpen({
      content: <SellNftModal />,
    })
  }

  return { open }
}
