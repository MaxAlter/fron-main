import React from 'react'
import SkeletonComponent, { SkeletonProps } from 'react-loading-skeleton'

import { classNames } from 'shared/utils'

import './styles.scss'

type Props = { withOpacity?: boolean } & SkeletonProps

const Skeleton: React.FC<Props> = ({
  className,
  withOpacity = false,
  baseColor = 'rgba(255, 255, 255, 10%)',
  highlightColor = 'rgba(46, 56, 71, 10%)',
  borderRadius = '7px',
  ...rest
}) => {
  return (
    <SkeletonComponent
      {...rest}
      className={classNames(
        'skeleton',
        withOpacity ? `skeleton_with-opacity` : undefined,
        className
      )}
      enableAnimation
      baseColor={baseColor}
      borderRadius={borderRadius}
      highlightColor={highlightColor}
    />
  )
}

export default Skeleton
