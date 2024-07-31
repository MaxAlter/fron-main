import React from 'react'
import { Link } from 'react-router-dom'

import { routeAbsolutePaths } from 'shared/router'
import { ButtonPrimary } from 'shared/ui/buttons'
import { TitleDescriptionLayout } from 'shared/ui/layouts'

import './styles.scss'

const NotFound: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-page__content">
        <TitleDescriptionLayout
          className="not-found-page__text"
          title="404"
          description="Page not found"
        />

        <Link
          to={routeAbsolutePaths.assets}
          className="not-found-page__action"
        >
          <ButtonPrimary
            variant="secondary"
            size="l"
          >
            Main
          </ButtonPrimary>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
