import { useUnit } from 'effector-react'

import { $$modalStore } from 'shared/stores'

import { PurchaseSummary } from '../types.ts'
import BuyNftModal from '../ui'

type OpenProps = {
  summary: PurchaseSummary
}

export const useBuyNftModal = () => {
  const [handleOpen] = useUnit([$$modalStore.open])

  const open = ({ summary }: OpenProps) => {
    handleOpen({
      content: <BuyNftModal summary={summary} />,
    })
  }

  return { open }
}
