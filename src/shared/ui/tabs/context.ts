import { createContext, useContext } from 'react'

export interface ITabsContext {
  value: number | string
  onChange: (value: number | string) => void
}

export const TabsContext = createContext<ITabsContext>({
  value: 1,
  onChange: () => {},
})

export const useTabsContext = () => useContext(TabsContext)
