import { createEffect, createEvent, createStore } from 'effector'

import { FetchHttpClient } from 'shared/data/network'
import { ProjectsDatasourceImpl } from 'shared/data/projects'
import { AssetDetailsModel } from 'shared/domain/projects'

const httpClient = new FetchHttpClient()
const projectsDatasource = new ProjectsDatasourceImpl(httpClient)

export const pageReady = createEvent<{ contractAddress: string; tokenId: string }>()

const getAssetDetailsFx = createEffect(projectsDatasource.getAssetDetails.bind(projectsDatasource))

export const $details = createStore<ValueOrNull<AssetDetailsModel>>(null)
export const $loading = getAssetDetailsFx.pending

$details.on(getAssetDetailsFx.done, (_, { result }) => result)

pageReady.watch(async ({ contractAddress, tokenId }) => {
  await getAssetDetailsFx({ contractAddress, tokenId })
})
