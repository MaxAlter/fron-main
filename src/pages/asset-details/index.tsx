import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { FormProvider } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { NftBuy } from 'widgets/nft'

import { Project } from 'entities/project'

import { AssetDetailsModel } from 'shared/domain/projects'
import { WithActionsLayout } from 'shared/ui/layouts'

import EmptyState from './components/empty-state'
import Info from './components/info'
import AssetDetailsPageSkeleton from './components/skeleton'
import Summary from './components/summary'
import { useFormController } from './form/use-form-controller'
import { $details, $loading, pageReady } from './model'
import './styles.scss'
import { useTonAddress } from '@tonconnect/ui-react'

type ContentWrapperProps = {
  details: AssetDetailsModel
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ details }) => {
  const { project, asset } = details
  
  
  const address = useTonAddress();
  const { methods, isDirty, isValid, allDocumentsIsChecked, handleSubmit, handleReviewed } =
    useFormController(address)

  return (
    <div className="asset-details-page">
      <FormProvider {...methods}>
        <WithActionsLayout
          actionsContent={
            <NftBuy
              summary={{
                name: asset.name,
                price: asset.price,
                ipoCount: asset.preIpoCount,
                discount: asset.discountPercent,
                tierCollectionId: asset.tierCollectionId,
                collectionAddress: asset.contractAddress,
              }}
              onBuy={handleSubmit}
              disabled={!isDirty || !isValid || !allDocumentsIsChecked}
            />
          }
        >
          <Project
            short
            count={project.count}
            industry={project.industry}
            minPrice={project.minPrice}
            maxPrice={project.maxPrice}
            yearFounded={project.yearFounded}
          />
          <Info
            asset={asset}
            allDocumentsIsChecked={allDocumentsIsChecked}
            onChangeReviewed={handleReviewed}
          />
          <Summary asset={asset} />
        </WithActionsLayout>
      </FormProvider>
    </div>
  )
}

const AssetDetailsPage: React.FC = () => {
  const params = useParams()

  const [details, loading] = useUnit([$details, $loading])

  useEffect(() => {
    if (params?.contractAddress && params.tokenId) {
      pageReady({ contractAddress: params.contractAddress, tokenId: params.tokenId })
    }
  }, [])

  const isStub = false

  if (isStub || loading) return <AssetDetailsPageSkeleton />

  if (!details) return <EmptyState />

  return <ContentWrapper details={details} />
}

export default AssetDetailsPage
