import { useUnit } from 'effector-react'
import React from 'react'

import { TooltipCommission } from 'features/tooltips'

import { IconGetGemsLogo } from 'shared/assets/icons'
import { ImageGetGemsBg } from 'shared/assets/images'
import { $$commonStore } from 'shared/stores'
import { ButtonPrimary } from 'shared/ui/buttons'
import { TitleDescriptionLayout, WithActionsLayout } from 'shared/ui/layouts'
import Typography from 'shared/ui/typography'

import './styles.scss'

const StorePage: React.FC = () => {
  const [options] = useUnit([$$commonStore.$options])

  return (
    <WithActionsLayout
      className="store-page"
      actionsContent={
        <a
          href={options?.urls.marketplaceUrl || '#'}
          target="_blank"
          rel="noreferrer"
        >
          <ButtonPrimary size="xl">Go to the marketplace</ButtonPrimary>
        </a>
      }
    >
      <div className="store-page__content">
        <div>
          <div className="store-page__icon-wrapper">
            <IconGetGemsLogo
              width={36}
              height={36}
            />
          </div>

          <TitleDescriptionLayout
            className="store-page__text"
            title={
              <TooltipCommission>
                <Typography
                  tag="h2"
                  size="24"
                  weight="700"
                  lineHeight="32px"
                  textAlign="center"
                >
                  Selling RWA NFTs <br /> on Getgems
                </Typography>
              </TooltipCommission>
            }
            description="You can earn on sales of your RWA NFT on the Getgems marketplace"
          />
        </div>

        <div className="store-page__logo">
          <img
            className="store-page__logo-bg"
            src={ImageGetGemsBg}
            alt="Getgems Logo"
          />
        </div>
      </div>
    </WithActionsLayout>
  )
}

export default StorePage
