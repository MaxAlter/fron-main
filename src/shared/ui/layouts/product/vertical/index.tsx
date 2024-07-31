import React, { PropsWithChildren, ReactNode } from 'react'

import Card from 'shared/ui/card'
import { classNames } from 'shared/utils'

import './styles.scss'

type Props = {
  imageUrl?: StringOrNull
  className?: string
  innerTopContent?: ReactNode
}

const ProductVerticalLayout: React.FC<PropsWithChildren<Props>> = ({
  className,
  imageUrl,
  children,
  innerTopContent,
}) => {
  return (
    <Card className={classNames('product-vertical-layout', className)}>
      <div className="product-vertical-layout__top">
        {innerTopContent}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Product image"
          />
        )}
      </div>
      <div className="product-vertical-layout__bottom">{children}</div>
    </Card>
  )
}

export default ProductVerticalLayout
