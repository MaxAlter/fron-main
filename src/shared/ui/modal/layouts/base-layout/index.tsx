import React, { ReactNode } from 'react'

import { ModalBody, ModalCloseButton, ModalContainer, ModalFooter, ModalHeader } from '../../parts'

type Props = {
  bodyContent?: ReactNode
  footerContent?: ReactNode
}

const ModalBaseLayout: React.FC<Props> = ({ bodyContent, footerContent }) => {
  return (
    <ModalContainer>
      <ModalHeader closeActionContent={<ModalCloseButton />} />
      <ModalBody>{bodyContent}</ModalBody>
      {footerContent && <ModalFooter>{footerContent}</ModalFooter>}
    </ModalContainer>
  )
}

export default ModalBaseLayout
