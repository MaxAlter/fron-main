import { useUnit } from 'effector-react/effector-react.umd'
import React from 'react'

import { NftList } from 'widgets/product-lists'

import { $$commonStore } from 'shared/stores'

import Projects from './components/projects'
import AssetsPageSkeleton from './components/skeleton'
import './styles.scss'

const AssetsPage: React.FC = () => {
  const [assets, projects, projectsLoading, assetsLoading] = useUnit([
    $$commonStore.$assets,
    $$commonStore.$projects,
    $$commonStore.$projectsLoading,
    $$commonStore.$assetsLoading,
  ])

  const isStub = import.meta.env.VITE_IS_STUB_MODE === 'true' ? true : false

  if (isStub) return <AssetsPageSkeleton />

  if (projectsLoading || assetsLoading) return <AssetsPageSkeleton />

  return (
    <div className="assets-page">
      {assets &&  projects ?
      <>
      <Projects list={projects} />
      <NftList list={assets} />
      </>
      : 'No Data'
      }

    </div>
  )
}

export default AssetsPage
