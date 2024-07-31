import React from 'react'

import { NftCard } from 'entities/nft'

import { NftModel } from 'shared/domain/nft'
import GridList from 'shared/ui/grid-list'

// eslint-disable-next-line no-restricted-imports
import { useSoldOutModal } from '../../../pages/asset-details/components/modals/sold-out'

type Props = {
  list: NftModel[]
}

const NftList: React.FC<Props> = ({ list }) => {
  const soldOutModal = useSoldOutModal()

  return (
    <GridList className="nft-list">
      {list.map((item) => (
        // <Link
        //   key={item.tokenId}
        //   to={`${routeAbsolutePaths.assets}/${item.contractAddress}/${item.tokenId}`}
        // >
        <div
          key={item.tokenId}
          onClick={soldOutModal.open}
          style={{ cursor: 'pointer' }}
        >
          <NftCard
            remainCount={item.preIpoRemainsCount}
            name={item.name}
            price={item.price}
            image={item.imageUrl}
            ipoCount={item.preIpoCount}
            discount={item.discountPercent}
          />
        </div>

        // </Link>
      ))}
    </GridList>
  )
}

export default NftList
