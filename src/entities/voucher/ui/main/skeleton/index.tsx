import React from 'react'

import Card from 'shared/ui/card'
import Skeleton from 'shared/ui/skeleton'

import './styles.scss'

const NftSkeleton: React.FC = () => {
  return (
    <Card className="voucher-skeleton">
      <Skeleton
        width="100%"
        height={171}
        borderRadius={0}
        baseColor={`var(--light-blue)`}
      />
      <Skeleton
        width="100%"
        height={99}
        borderRadius={0}
        baseColor={`var(--pastel-blue)`}
      />
    </Card>
  )
}

export default NftSkeleton
