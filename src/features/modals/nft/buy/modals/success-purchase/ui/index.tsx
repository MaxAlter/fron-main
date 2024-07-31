import React from 'react'

import { ModalBaseLayout } from 'shared/ui/modal'

import Content from './components/content'

const SuccessPurchaseModal: React.FC = () => {
  return <ModalBaseLayout bodyContent={<Content />} />
}

export default SuccessPurchaseModal
