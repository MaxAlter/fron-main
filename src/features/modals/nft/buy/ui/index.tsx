import React from 'react'

import { ModalBaseLayout } from 'shared/ui/modal'

import { PurchaseSummary } from '../types.ts'
import Content from './components/content'
import FooterContent from './components/footerContent'

type Props = {
  summary: PurchaseSummary
}

const BuyNftModal: React.FC<Props> = ({ summary }) => {
  return (
    <ModalBaseLayout
      bodyContent={<Content summary={summary} />}
      footerContent={<FooterContent summary={summary} />}
    />
  )
}

export default BuyNftModal
