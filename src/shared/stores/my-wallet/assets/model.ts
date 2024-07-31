import { createEffect, createEvent, createStore } from 'effector'

import { FetchHttpClient } from 'shared/data/network'
import { WalletDatasourceImpl } from 'shared/data/wallet'
import { NftModel } from 'shared/domain/nft'
import { $$commonStore } from 'shared/stores/index.ts'

const httpClient = new FetchHttpClient()
const walletDatasource = new WalletDatasourceImpl(httpClient)

type ReadyParams = { address: string; tokenId?: StringOrNull; refetch?: boolean }

const ready = createEvent<ReadyParams>()

const setDetails = createEvent<string>()

const getWalletAssetsFx = createEffect(walletDatasource.getAssets.bind(walletDatasource))

const $assets = createStore<NftModel[]>([])

const $details = createStore<ValueOrNull<NftModel>>(null)

const $loading = getWalletAssetsFx.pending

$assets.on(getWalletAssetsFx.done, (_, { result }) => {
  const assetList = $$commonStore.$assets.getState()

  return result.items.map((item) => {
    const foundAsset = assetList.find((asset) => asset.tierCollectionId === item.tierCollectionId)

    if (foundAsset) {
      return new NftModel(
        item.contractAddress,
        item.tokenId,
        item.name,
        item.imageUrl,
        foundAsset.price,
        foundAsset.preIpoCount,
        foundAsset.preIpoRemainsCount,
        item.discountPercent,
        foundAsset.tierCollectionId
      )
    }

    return item
  })
})

$details.on(setDetails, (_, tokenId) => {
  return $assets.getState().find((item) => item.tierCollectionId === +tokenId) || null
})

ready.watch(async (params: ReadyParams) => {
  const contractAddress = $$commonStore.$projects.getState()?.[0]?.contractAddress

  if (params.address && contractAddress) {
    if (params.refetch || $assets.getState().length === 0) {
      await getWalletAssetsFx({ walletAddress: params.address, contractAddress })
    }

    if (params.tokenId) {
      setDetails(params.tokenId)
    }
  }
})

export const $$walletAssetsStore = {
  $assets,
  $details,
  $loading,
  ready,
}
