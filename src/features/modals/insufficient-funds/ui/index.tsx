import React from 'react'

import { ModalBaseLayout } from 'shared/ui/modal'

import { InsufficientFundsProps } from '../types'
import Content from './components/content'
import FooterContent from './components/footerContent'

const InsufficientFundsModal: React.FC<InsufficientFundsProps> = ({ title }) => {
  return (
    <ModalBaseLayout
      bodyContent={<Content title={title} />}
      footerContent={<FooterContent />}
    />
  )
}

export default InsufficientFundsModal
