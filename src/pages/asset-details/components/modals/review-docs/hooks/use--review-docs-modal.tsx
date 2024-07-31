import { useUnit } from 'effector-react'
import { Control } from 'react-hook-form'

import { $$modalStore } from 'shared/stores'

import ReviewDocsModal from '../ui'

export const useReviewDocsModal = (control: Control) => {
  const [handleOpen] = useUnit([$$modalStore.open])

  const open = () => {
    handleOpen({
      content: <ReviewDocsModal control={control} />,
    })
  }

  return { open }
}
