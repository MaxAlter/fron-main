import React from 'react'

import { ModalBaseLayout } from 'shared/ui/modal'

import Content from './components/content'

const SoldOutModal: React.FC = () => {
  return <ModalBaseLayout bodyContent={<Content />} />
}

export default SoldOutModal
