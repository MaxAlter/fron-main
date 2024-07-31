import { useUnit } from 'effector-react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { Fragment, useEffect } from 'react'
import { Location, useLocation } from 'react-router-dom'

import { usePrevious } from 'shared/hooks'
import { $$modalStore } from 'shared/stores'

import './styles.scss'

const TRANSITION_PARAMS = { ease: 'easeInOut', duration: 0.3 }

const OVERLAY_ANIMATIONS = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
}

const CONTENT_ANIMATIONS = {
  initial: { translateY: '100%' },
  isOpen: { translateY: '0' },
  exit: { translateY: '100%' },
}

const Modal: React.FC = () => {
  const location = useLocation()
  const prevLocation = usePrevious<Location | undefined>(location)
  const [modals, closeModal] = useUnit([$$modalStore.$modals, $$modalStore.close])

  const handleCloseModal = () => {
    closeModal()
  }

  const handleBodyLock = () => {
    const body = document?.body

    if (body) {
      if (modals.length !== 0) {
        if (!body.classList.contains('locked')) {
          body.classList.add('locked')
        }
      } else {
        body.classList.remove('locked')
      }
    }
  }

  useEffect(() => {
    if (prevLocation) {
      if (prevLocation.pathname !== location.pathname) {
        handleCloseModal()
      }
    }
  })

  useEffect(() => {
    handleBodyLock()
  }, [modals.length])

  return (
    <AnimatePresence>
      {modals.length !== 0 && (
        <div
          className="modal"
          key="modal"
        >
          {modals.map((modal, index) => (
            <Fragment key={modal.id}>
              {modals.length - 1 === index && (
                <motion.div
                  key={`overlay-${modal.id}`}
                  initial="initial"
                  animate="isOpen"
                  exit="exit"
                  variants={OVERLAY_ANIMATIONS}
                  className="modal__overlay"
                  transition={TRANSITION_PARAMS}
                  onClick={handleCloseModal}
                />
              )}
              <motion.div
                key={`content-${modal.id}`}
                initial="initial"
                animate="isOpen"
                exit="exit"
                className="modal__content"
                variants={CONTENT_ANIMATIONS}
                transition={TRANSITION_PARAMS}
              >
                {modal.content}
              </motion.div>
            </Fragment>
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}

export default Modal
