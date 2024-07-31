import { useUnit } from 'effector-react'

import { $$modalStore } from 'shared/stores'

import SoldOutModal from '../ui'

export const useSoldOutModal = () => {
  const [handleOpen] = useUnit([$$modalStore.open])

  const open = () => {
    handleOpen({
      content: <SoldOutModal />,
    })
  }

  return { open }
}
