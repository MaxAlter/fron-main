import { useUnit } from 'effector-react'
import React from 'react'

import { $$modalStore } from 'shared/stores'
import { ButtonPrimary } from 'shared/ui/buttons'

const FooterContent: React.FC = () => {
  const [close] = useUnit([$$modalStore.close])

  return (
    <ButtonPrimary
      size="xl"
      onClick={close}
    >
      Return to Shopping
    </ButtonPrimary>
  )
}

export default FooterContent
