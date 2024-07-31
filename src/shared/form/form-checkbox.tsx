import React, { PropsWithChildren } from 'react'
import { useController, useFormContext } from 'react-hook-form'

import Checkbox from 'shared/ui/checkbox'

type Props = {
  name: string
  className?: string
}

const FormCheckbox: React.FC<PropsWithChildren<Props>> = ({ name, className, children }) => {
  const { control } = useFormContext()
  const { field } = useController({ name, control, defaultValue: false })

  return (
    <Checkbox
      name={name}
      checked={field.value}
      className={className}
      onChange={field.onChange}
    >
      {children}
    </Checkbox>
  )
}

export default FormCheckbox
