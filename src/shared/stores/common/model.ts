import { createEffect, createEvent, createStore } from 'effector'

import { FetchHttpClient } from 'shared/data/network'
import { NftDatasourceImpl } from 'shared/data/nft'
import { OptionsDatasourceImpl } from 'shared/data/options'
import { ProjectsDatasourceImpl } from 'shared/data/projects'
import { NftModel, NftRemainingModel } from 'shared/domain/nft'
import { ProjectModel } from 'shared/domain/projects'

import { OptionsModel } from '../../domain/options'

const httpClient = new FetchHttpClient()
const optionsDatasource = new OptionsDatasourceImpl(httpClient)
const projectsDatasource = new ProjectsDatasourceImpl(httpClient)
const nftDatasource = new NftDatasourceImpl(httpClient)

const initialize = createEvent()

const getOptionsFx = createEffect(optionsDatasource.get.bind(optionsDatasource))

const getProjectsFx = createEffect(projectsDatasource.getProjects.bind(projectsDatasource))
const getAssetsFx = createEffect(projectsDatasource.getAssets.bind(projectsDatasource))

const getRemainingsFx = createEffect(
  nftDatasource.getRemainingNftsFromCollection.bind(nftDatasource)
)

const $remainings = createStore<NftRemainingModel[]>([])
const $remainingsLoading = getRemainingsFx.pending

$remainings.on(getRemainingsFx.done, (_, { result }) => result)

const $options = createStore<ValueOrNull<OptionsModel>>(null)
const $optionsLoading = getOptionsFx.pending

$options.on(getOptionsFx.done, (_, { result }) => result)

const $assets = createStore<NftModel[]>([])
const $assetsLoading = getAssetsFx.pending

$assets.on(getAssetsFx.done, (_, { result }) =>
  result.items.sort((a, b) => Number(a.tokenId) - Number(b.tokenId))
)

$assets.on(getRemainingsFx.done, (currentList, { result }) => {
  return currentList.map((item) => {
    const foundRemaining = result.find((remItem) => remItem.tierId === item.tierCollectionId)

    if (foundRemaining) {
      return new NftModel(
        item.contractAddress,
        item.tokenId,
        item.name,
        item.imageUrl,
        item.price,
        item.preIpoCount,
        foundRemaining.preIpoRemainsCount,
        item.discountPercent,
        item.tierCollectionId
      )
    }

    return item
  })
})

const $projects = createStore<ProjectModel[]>([])
const $projectsLoading = getProjectsFx.pending

$projects.on(getProjectsFx.done, (_, { result }) => result.items)

initialize.watch(async () => {
  await getOptionsFx()

  const responseProjects = await getProjectsFx()
  const contractAddress = responseProjects?.items?.[0]?.contractAddress

  if (contractAddress) {
    await getAssetsFx(contractAddress)

    getRemainingsFx(contractAddress)
  }
})

export const $$commonStore = {
  $assets,
  $options,
  $optionsLoading,
  $assetsLoading,
  $projects,
  $projectsLoading,
  $remainings,
  $remainingsLoading,
  getProjectsFx,
  getAssetsFx,
  getRemainingsFx,
  initialize,
}
