import React from 'react'

import { IconErrorWarning } from 'shared/assets/icons'
import { palette } from 'shared/assets/styles'
import { CollectionNameEnum } from 'shared/enums'
import { ButtonPrimary } from 'shared/ui/buttons'
import Card from 'shared/ui/card'
import CollectionName from 'shared/ui/collection-name'
import Price from 'shared/ui/price'
import TitledContent from 'shared/ui/titled-content'
import { Tooltip, TooltipWrapper } from 'shared/ui/tooltip'
import Typography from 'shared/ui/typography'
import { formatDate, formatNumberWithSpacing, formatPriceFromNano } from 'shared/utils'

import { IProject } from '../model'
import { formatIndustryByTypeToString } from '../utils'
import TooltipContent from './components/tooltip-content'
import './styles.scss'

type Props = {
  short?: boolean
} & IProject

const Project: React.FC<Props> = ({
  short = false,
  count,
  yearFounded,
  industry,
  minPrice,
  maxPrice,
  presentation_url,
}) => {
  return (
    <Card className="project">
      <div className="project__top">
        <div className="project__name-and-count">
          <div className="project__collection-name">
            <CollectionName type={CollectionNameEnum.LEDGER} />
          </div>
          <Typography
            size="14"
            weight="700"
            tag="p"
            color={palette.shamrock}
          >
            {count} TIERS
          </Typography>
        </div>
        <TitledContent
          titleTextSettings={{ width: 'max-content' }}
          title={
            <TooltipWrapper
              tooltip={
                <Tooltip
                  id="project"
                  clickable
                  place="bottom"
                  maxWidth="360px"
                  width="calc(100% - 32px)"
                  triggerContent={
                    <IconErrorWarning
                      width={14}
                      height={14}
                    />
                  }
                >
                  <TooltipContent />
                </Tooltip>
              }
            >
              <Typography
                size="14"
                weight="600"
                tag="span"
                width="max-content"
              >
                Price Pre-IPO Assets
              </Typography>
            </TooltipWrapper>
          }
          content={
            <Price
              text={{ weight: '700', size: '20', tag: 'span' }}
              min={formatNumberWithSpacing(formatPriceFromNano(minPrice))}
              max={formatNumberWithSpacing(formatPriceFromNano(maxPrice))}
            />
          }
        />
      </div>
      {!short && (
        <div className="project__bottom">
          <TitledContent
            row
            title="Primary Industry:"
            content={formatIndustryByTypeToString(industry)}
          />
          <TitledContent
            row
            title="Year Founded:"
            content={formatDate(yearFounded, 'yyyy')}
          />
          <a
            href={presentation_url || ''}
            target="_blank"
            rel="noreferrer"
          >
            <ButtonPrimary
              size="m"
              variant="primary"
            >
              Presentation
            </ButtonPrimary>
          </a>
        </div>
      )}
    </Card>
  )
}

export default Project
