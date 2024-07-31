import React from 'react'

import Card from 'shared/ui/card'
import Skeleton from 'shared/ui/skeleton'

import './styles.scss'

type Props = {
  short?: boolean
}

const ProjectSkeleton: React.FC<Props> = ({ short = false }) => {
  return (
    <Card className="project-skeleton">
      <div className="project-skeleton__top">
        <div className="project-skeleton__name-and-count">
          <Skeleton
            width={97}
            height={29}
          />
          <Skeleton
            width={51}
            height={18}
          />
        </div>

        <div className="project-skeleton__ipo-and-price">
          <Skeleton
            width={148}
            height={18}
          />
          <div className="project-skeleton__price">
            <Skeleton
              width={20}
              height={20}
              borderRadius="50%"
            />

            <Skeleton
              width={70}
              height={20}
            />
          </div>
        </div>
      </div>
      {!short && (
        <div className="project-skeleton__bottom">
          <div className="project-skeleton__info">
            <Skeleton
              width={274}
              height={20}
            />
            <Skeleton
              width={274}
              height={20}
            />
          </div>
          <Skeleton
            width={310}
            height={40}
          />
        </div>
      )}
    </Card>
  )
}

export default ProjectSkeleton
