import React, { Children, PropsWithChildren, ReactElement, cloneElement } from 'react'

import { classNames } from '../../../utils'
import { TabsContext } from '../context.ts'
import './styles.scss'

type Props = {
  value: number | string
  className?: string
  onChange: (value: number | string) => void
}

const Tabs: React.FC<PropsWithChildren<Props>> = ({ children, value, className, onChange }) => {
  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const el = child as ReactElement
      const elProps = el?.props || {}

      return cloneElement(child as ReactElement, {
        ...elProps,
        value: elProps.props?.value ? elProps.props.value : index + 1,
      })
    })
  }

  return (
    <TabsContext.Provider value={{ value, onChange }}>
      <div className={classNames('tabs', className)}>{renderChildren()}</div>
    </TabsContext.Provider>
  )
}

export default Tabs
