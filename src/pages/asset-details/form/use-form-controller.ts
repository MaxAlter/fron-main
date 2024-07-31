import { useForm, useWatch } from 'react-hook-form'

import { getInitialValues } from './data'
import { DOCS_NAMES, FIELD_NAMES, FormValues } from './types'
import { validationSchema } from './validation-schema'
import { MailDatasource } from 'shared/data/mail'
import { FetchHttpClient } from 'shared/data/network'

const httpClient = new FetchHttpClient()
const mailDatasource = new MailDatasource(httpClient)

export const useFormController = (address: string) => {
  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: validationSchema,
    defaultValues: getInitialValues(),
  })

  const isDirty = methods.formState.isDirty
  const isValid = methods.formState.isValid

  const documentValues = useWatch({ name: FIELD_NAMES.DOCUMENTS, control: methods.control })
  const allDocumentsIsChecked = Object.values(documentValues).every((value) => !!value)

  const onSubmit = (_values: FormValues, openSummaryModal: () => void) => {
    openSummaryModal()
  }

  const handleReviewed = () => {
    Object.values(DOCS_NAMES).forEach((key) => {
      methods.setValue(`${FIELD_NAMES.DOCUMENTS}.${key}`, !allDocumentsIsChecked as never)

      localStorage.setItem(`${FIELD_NAMES.DOCUMENTS}.${key}`, String(!allDocumentsIsChecked))
    })
  }

  const handleSubmit = async (openSummaryModal: () => void) => 
    await methods.handleSubmit((values) => {
      onSubmit(values, openSummaryModal)
      mailDatasource.save(values.email, address);
    })()

  return { methods, isDirty, isValid, allDocumentsIsChecked, handleReviewed, handleSubmit }
}
