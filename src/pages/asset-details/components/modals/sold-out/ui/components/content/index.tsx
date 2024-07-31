import React from 'react'

import { TitleDescriptionLayout } from 'shared/ui/layouts'

import './styles.scss'

const Content: React.FC = () => {
  return (
    <div className="review-docs-modal-content">
      <TitleDescriptionLayout
        className="review-docs-modal-content__title-description-layout"
        title="Sold out"
        description=""
      />

      <div className="review-docs-modal-content__form __sold">
        This collection has been sold out. If you want to buy RWA NFT please visit
        <a
          href={'https://getgems.io/collection/EQDRBNqjGLiiDyevYHB0fpiWtQQnteTU8azLsxJ-lR3EKJkJ'}
          target={'_blank'}
          rel="noreferrer"
        >
          GetGems
        </a>
      </div>
    </div>
  )
}

export default Content
