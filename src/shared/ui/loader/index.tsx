import { motion } from 'framer-motion'
import React from 'react'

import { IconMmProLogo, IconTonKeeperLogo } from 'shared/assets/icons'
import { classNames } from 'shared/utils'

import Typography from '../typography'
import './styles.scss'

type Props = {
  className?: string
  absolute?: boolean
}

const ITEM_FIRST_ANIMATE = {
  x: ['0', '100%', '0'],
  scale: [1, 0.85, 1],
  zIndex: 2,
}

const ITEM_SECOND_ANIMATE = {
  x: ['0', '-100%', '0'],
  scale: [1, 0.85, 1],
}

const ITEM_TRANSITION = {
  duration: 1.3,
  ease: 'easeInOut',
  times: [0, 0.2, 0.5, 0.8, 1],
  repeat: Infinity,
}

const Loader: React.FC<Props> = ({ className, absolute }) => {
  const isStub = import.meta.env.VITE_IS_STUB_MODE === 'true' ? true : false;
  return (
    <div className={classNames('loader', absolute ? 'loader_absolute' : undefined, className)}>
      <div style={{ position: 'relative' }}>
        <div className="loader__inner">
          <motion.div
            className="loader__item"
            animate={ITEM_FIRST_ANIMATE}
            transition={ITEM_TRANSITION}
          >
            <IconMmProLogo
              width={84}
              height={84}
            />
          </motion.div>
          <motion.div
            className="loader__item"
            animate={ITEM_SECOND_ANIMATE}
            transition={ITEM_TRANSITION}
          >
            <IconTonKeeperLogo
              width={84}
              height={84}
            />
          </motion.div>
        </div>
        {isStub && (<div className="loader__start-sales">
          <Typography textAlign="center">Sales Start</Typography>
          <Typography
            textAlign="center"
            size="16"
            weight="600"
          >
            18:00 CET, 18.06.2024
          </Typography>
        </div>)}
      </div>
    </div>
  )
}

export default Loader
