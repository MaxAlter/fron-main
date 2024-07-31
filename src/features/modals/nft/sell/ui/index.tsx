import React from 'react'

import { ModalBaseLayout } from 'shared/ui/modal'

import Content from './components/content'
import FooterContent from './components/footerContent'

const SellNftModal: React.FC = () => {
  return (
    <ModalBaseLayout
      bodyContent={<Content />}
      footerContent={<FooterContent />}
    />
  )
}

export default SellNftModal
