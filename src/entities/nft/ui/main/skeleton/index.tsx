import React from 'react'

import Card from 'shared/ui/card'
import Skeleton from 'shared/ui/skeleton'

import './styles.scss'

const NftSkeleton: React.FC = () => {
  return (
    <Card className="nft-skeleton">
      <Skeleton
        width="100%"
        height={171}
        borderRadius={0}
        baseColor={'#CFDAE1'}
      />
      <Skeleton
        width="100%"
        height={99}
        borderRadius={0}
        baseColor={'#B0BECF'}
      />
    </Card>
  )
}

export default NftSkeleton
