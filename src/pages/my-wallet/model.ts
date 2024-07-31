import { createEvent, createStore } from 'effector'

const MODEL_PREFIX = 'wallet/'

const tabChanged = createEvent()

const $tab = createStore<number | string>(1, { name: `${MODEL_PREFIX}tab` })

$tab.on(tabChanged, (_, newTabValue) => newTabValue)

export const $$myWalletPage = {
  $tab,
  tabChanged,
}
