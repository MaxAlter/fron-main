import { useUnit } from 'effector-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { MailDatasource } from 'shared/data/mail'
import { FetchHttpClient } from 'shared/data/network'
import { $$modalStore } from 'shared/stores'

import { getInitialValues } from './data'
import { FIELD_NAMES, FormValues } from './types'
import { validationSchema } from './validation-schema'

const httpClient = new FetchHttpClient()
const mailDatasource = new MailDatasource(httpClient)

export const useFormController = () => {
  const [closeModal] = useUnit([$$modalStore.close])
  const [isSubmitLoading, setSubmitLoading] = useState<boolean>(false)

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: validationSchema,
    defaultValues: getInitialValues(),
  })

  const handleSubmit = async (values: FormValues) => {
    if (isSubmitLoading) return

    setSubmitLoading(true)

    try {
      await mailDatasource.send({ email: values[FIELD_NAMES.EMAIL] })

      closeModal()
    } finally {
      setSubmitLoading(false)
    }
  }

  return { methods, isSubmitLoading, handleSubmit }
}
