import { useUnit } from 'effector-react'

import { $$modalStore } from 'shared/stores'

import SellVoucherModal from '../ui'

export const useSellVoucherModal = () => {
  const [handleOpen] = useUnit([$$modalStore.open])

  const open = () => {
    handleOpen({
      content: <SellVoucherModal />,
    })
  }

  return { open }
}
