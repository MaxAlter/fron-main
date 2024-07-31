import React from 'react'

import { NftSkeleton } from 'entities/nft'
import { ProjectSkeleton } from 'entities/project'

import GridList from 'shared/ui/grid-list'
import Loader from 'shared/ui/loader'

import './styles.scss'

const AssetsPageSkeleton: React.FC = () => {
  return (
    <div className="assets-page-skeleton">
      <Loader absolute />
      <ProjectSkeleton />
      <GridList>
        <NftSkeleton />
        <NftSkeleton />
      </GridList>
    </div>
  )
}

export default AssetsPageSkeleton
