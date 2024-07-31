import React, { ChangeEvent, HTMLAttributes, HTMLInputTypeAttribute } from 'react'

import { classNames } from 'shared/utils'

import './styles.scss'

type BaseInputProps = HTMLAttributes<HTMLInputElement>

export type TextInputProps = {
  name?: string
  type?: HTMLInputTypeAttribute
  value?: string
  placeholder?: string
  error?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
} & BaseInputProps

const TextInput: React.FC<TextInputProps> = ({
  name,
  type,
  error,
  className,
  value,
  placeholder,
  onChange,
  ...rest
}) => {
  return (
    <div className={classNames('text-input', error ? 'text-input_error' : undefined, className)}>
      <input
        {...rest}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export default TextInput
