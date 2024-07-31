import isNil from 'lodash/isNil'
import React, { HTMLInputTypeAttribute } from 'react'
import { useController, useFormContext } from 'react-hook-form'

import TextInput from 'shared/ui/text-input'

type Props = {
  name: string
  className?: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
}

const FormTextInput: React.FC<Props> = ({ name, className, placeholder, type }) => {
  const { control } = useFormContext()
  const { field, fieldState } = useController({ name, control, defaultValue: '' })

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    field.onChange(e.currentTarget.value)
  }

  return (
    <TextInput
      value={!isNil(field.value) ? field.value : ''}
      type={type}
      className={className}
      error={!!fieldState.error}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default FormTextInput
