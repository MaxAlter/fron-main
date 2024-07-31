import React from 'react'

import { ImageParty } from 'shared/assets/images'
import { TitleDescriptionLayout } from 'shared/ui/layouts'

import './styles.scss'

const Content: React.FC = () => {
  return (
    <div className="success-purchase-modal-content">
      <img
        src={ImageParty}
        alt="Party"
        className="success-purchase-modal-content__icon"
      />
      <TitleDescriptionLayout
        title="Congratulations!"
        description={
          <>
            Congratulations on acquiring an <br /> RWA NFT
          </>
        }
      />
    </div>
  )
}

export default Content
