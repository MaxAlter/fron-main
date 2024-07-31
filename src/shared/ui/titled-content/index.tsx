import React, { ReactNode } from 'react'

import Typography, { Size, Tag, Weight } from 'shared/ui/typography'
import { classNames } from 'shared/utils'

import './styles.scss'

interface TextSettings {
  size?: Size
  tag?: Tag
  weight?: Weight
  width?: string
  color?: string
}

export type TitledContentBaseProps = {
  row?: boolean
  className?: string
  title?: ReactNode
  content?: ReactNode
  titleTextSettings?: TextSettings
  contentTextSettings?: TextSettings
}

type Props = TitledContentBaseProps

const DEFAULT_TITLE_SETTINGS: TextSettings = { tag: 'div', size: '14', weight: '500' }
const DEFAULT_CONTENT_SETTINGS: TextSettings = { tag: 'div', size: '14', weight: '600' }

const TitledContent: React.FC<Props> = ({
  row,
  title,
  content,
  className,
  titleTextSettings = { tag: 'div', size: '14', weight: '500' },
  contentTextSettings = { tag: 'div', size: '14', weight: '600' },
}) => {
  const titleSettings = { ...DEFAULT_TITLE_SETTINGS, ...titleTextSettings }
  const contentSettings = { ...DEFAULT_CONTENT_SETTINGS, ...contentTextSettings }

  return (
    <div
      className={classNames(
        'titled-content-base',
        row ? 'titled-content-base_row' : undefined,
        className
      )}
    >
      {title && (
        <Typography
          tag={titleSettings.tag}
          size={titleSettings.size}
          color={titleSettings.color}
          width={titleSettings.width}
          weight={titleSettings.weight}
          className="titled-content-base__title"
        >
          {title}
        </Typography>
      )}
      {content && (
        <Typography
          tag={contentSettings.tag}
          size={contentSettings.size}
          color={contentSettings.color}
          width={contentSettings.width}
          weight={contentSettings.weight}
          className="titled-content-base__content"
        >
          {content}
        </Typography>
      )}
    </div>
  )
}

export default TitledContent
