import React from 'react'
import { useFormContext } from 'react-hook-form'

import { ButtonPrimary } from 'shared/ui/buttons'

type Props = {
  isSubmitLoading: boolean
}

const FooterContent: React.FC<Props> = ({ isSubmitLoading }) => {
  const { formState } = useFormContext()

  const disabled = !formState.isDirty || !formState.isValid || isSubmitLoading

  return (
    <ButtonPrimary
      type="submit"
      size="xl"
      disabled={disabled}
    >
      Send
    </ButtonPrimary>
  )
}

export default FooterContent
