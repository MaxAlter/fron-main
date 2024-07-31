import React from 'react'

import { NftListWallet } from 'widgets/product-lists'

import './styles.scss'

const NftList: React.FC = () => {
  return (
    <div className="my-wallet-page-nfts">
      <NftListWallet />
    </div>
  )
}

export default NftList
