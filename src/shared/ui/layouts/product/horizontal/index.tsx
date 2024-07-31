import React, { PropsWithChildren, ReactNode } from 'react'

import { classNames } from 'shared/utils'

import './styles.scss'

type Props = {
  className?: string
  imageUrl?: StringOrNull
  innerMediaContent?: ReactNode
  aboveSectionContent?: ReactNode
}

const ProductHorizontalLayout: React.FC<PropsWithChildren<Props>> = ({
  className,
  imageUrl,
  children,
  innerMediaContent,
  aboveSectionContent,
}) => {
  return (
    <div className={classNames('product-horizontal-layout', className)}>
      {aboveSectionContent}

      <div className="product-horizontal-layout__content">
        <div className="product-horizontal-layout__left">
          {innerMediaContent}
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Product image"
            />
          )}
        </div>
        <div className="product-horizontal-layout__right">{children}</div>
      </div>
    </div>
  )
}

export default ProductHorizontalLayout
