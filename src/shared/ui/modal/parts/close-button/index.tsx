import { useUnit } from 'effector-react'
import React from 'react'

import { IconCross } from 'shared/assets/icons'
import { $$modalStore } from 'shared/stores'
import { ButtonPrimary } from 'shared/ui/buttons'
import { classNames } from 'shared/utils'

import './styles.scss'

type Props = {
  className?: string
}

const ModalCloseButton: React.FC<Props> = ({ className }) => {
  const [close] = useUnit([$$modalStore.close])

  const handleClose = () => {
    close()
  }

  return (
    <ButtonPrimary
      width="32px"
      variant="secondary"
      className={classNames('modal-close-button', className)}
      onClick={handleClose}
    >
      <IconCross
        width={16}
        height={16}
      />
    </ButtonPrimary>
  )
}

export default ModalCloseButton
