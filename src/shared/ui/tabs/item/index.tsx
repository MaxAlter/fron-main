import React, { PropsWithChildren } from 'react'

import { ButtonSecondary } from 'shared/ui/buttons'
import { classNames } from 'shared/utils'

import { useTabsContext } from '../context.ts'

type Props = {
  className?: string
  value?: string | number
}

const Tab: React.FC<PropsWithChildren<Props>> = ({ children, className, value }) => {
  const { onChange, value: activeValue } = useTabsContext()

  const handleChange = () => {
    if (value && activeValue !== value) {
      onChange(value)
    }
  }

  return (
    <ButtonSecondary
      width="max-content"
      variant={activeValue === value ? 'primary' : 'ghost'}
      className={classNames('tab', className)}
      onClick={handleChange}
    >
      {children}
    </ButtonSecondary>
  )
}

export default Tab
