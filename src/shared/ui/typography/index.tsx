import { FC, ReactNode, createElement } from 'react'

import { classNames } from 'shared/utils'

import './style.scss'

export type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'

export type Size = '24' | '20' | '16' | '14' | '12' | '10' | '8'

export type Weight = '700' | '600' | '500'

interface TypographyProps {
  tag?: Tag
  size?: Size
  color?: string
  weight?: Weight
  className?: string
  width?: string
  children?: ReactNode
  lineHeight?: string
  textAlign?: string
}

const Typography: FC<TypographyProps> = ({
  className,
  children,
  color,
  width,
  tag = 'div',
  size = '14',
  weight = '500',
  lineHeight,
  textAlign,
}) => {
  const classes = classNames(
    'typography',
    `typography_font-size-${size}`,
    `typography_font-weight-${weight}`,
    className
  )

  return createElement(
    tag,
    { className: classes, style: { color, width, lineHeight, textAlign } },
    children
  )
}

export default Typography
