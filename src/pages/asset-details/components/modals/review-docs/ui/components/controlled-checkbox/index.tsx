import React, { PropsWithChildren } from 'react'
import { Control, Controller } from 'react-hook-form'

import Checkbox from 'shared/ui/checkbox'

type Props = {
  name: string
  linkUrl?: StringOrNull
  control: Control
}

const ControlledCheckbox: React.FC<PropsWithChildren<Props>> = ({
  name,
  control,
  linkUrl,
  children,
}) => {
  const handleChange = (onChange: (value: boolean) => void) => (value: boolean) => {
    onChange(value)

    localStorage.setItem(name, JSON.stringify(value))
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Checkbox
          checked={value}
          onChange={handleChange(onChange)}
        >
          <a
            href={linkUrl ? linkUrl : '#'}
            target={linkUrl ? '_blank' : undefined}
            rel="noreferrer"
          >
            {children}
          </a>
        </Checkbox>
      )}
    />
  )
}

export default ControlledCheckbox
