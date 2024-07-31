import { createEvent, createStore } from 'effector'

import { generateRandomKey } from 'shared/utils'

import { IModal } from './interfaces'

const open = createEvent<Pick<IModal, 'content' | 'name'>>()

const close = createEvent()

const closeAll = createEvent()

const $modals = createStore<IModal[]>([])

$modals.on(open, (state, payload) => {
  return [
    ...state,
    {
      id: generateRandomKey(),
      name: payload.name,
      content: payload.content,
    },
  ]
})

$modals.on(close, (state) => {
  const copy = [...state]

  copy.pop()

  return copy
})

$modals.reset(closeAll)

export const $$modalStore = {
  $modals,
  open,
  close,
  closeAll,
}
