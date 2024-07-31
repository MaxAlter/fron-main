import React from 'react'
import { Control } from 'react-hook-form'

import { ModalBaseLayout } from 'shared/ui/modal'

import Content from './components/content'

type Props = {
  control: Control
}

const ReviewDocsModal: React.FC<Props> = ({ control }) => {
  return <ModalBaseLayout bodyContent={<Content control={control} />} />
}

export default ReviewDocsModal
