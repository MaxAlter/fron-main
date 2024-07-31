import React, { PropsWithChildren } from 'react'

import { IconCheckMark } from 'shared/assets/icons'
import { classNames } from 'shared/utils'

import './styles.scss'

type Props = {
  name?: string
  className?: string
  checked?: boolean
  onChange?: (value: boolean) => void
}

const Checkbox: React.FC<PropsWithChildren<Props>> = ({
  name,
  children,
  checked,
  onChange,
  className,
}) => {
  const handleChange = () => {
    onChange?.(!checked)
  }

  return (
    <div className={classNames('checkbox', className)}>
      <label>
        <input
          hidden
          name={name}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <div className="checkbox__item">
          <IconCheckMark className="checkbox__check-mark" />
        </div>
        {children}
      </label>
    </div>
  )
}

export default Checkbox
