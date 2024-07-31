import { useUnit } from 'effector-react'
import React, { PropsWithChildren } from 'react'

import { $$commonStore } from 'shared/stores'
import Loader from 'shared/ui/loader'

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [optionsLoading] = useUnit([$$commonStore.$optionsLoading])

  if (optionsLoading) return <Loader absolute />

  return <>{children}</>
}

export default AppProvider

$$commonStore.initialize()
