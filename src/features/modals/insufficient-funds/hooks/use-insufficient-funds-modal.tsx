import { useUnit } from 'effector-react'

import { $$modalStore } from 'shared/stores'

import { InsufficientFundsProps } from '../types'
import InsufficientFundsModal from '../ui'

export const useInsufficientFundsModal = () => {
  const [handleOpen] = useUnit([$$modalStore.open])

  const open = (props: InsufficientFundsProps) => {
    handleOpen({
      content: <InsufficientFundsModal {...props} />,
    })
  }

  return { open }
}
