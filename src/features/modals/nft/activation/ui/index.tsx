import React from 'react'

import { Form } from 'shared/form'
import { ModalBaseLayout } from 'shared/ui/modal'

import { useFormController } from '../form/use-form-controller'
import Content from './components/content'
import FooterContent from './components/footerContent'

const ActivationNftModal: React.FC = () => {
  const { methods, isSubmitLoading, handleSubmit } = useFormController()

  return (
    <Form
      methods={methods}
      onSubmit={handleSubmit}
    >
      <ModalBaseLayout
        bodyContent={<Content />}
        footerContent={<FooterContent isSubmitLoading={isSubmitLoading} />}
      />
    </Form>
  )
}

export default ActivationNftModal
