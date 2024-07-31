import { IHttpClient } from 'shared/data/network'
import {
  AssetDetailsModel,
  AssetsResponseModel,
  IProjectDatasource,
  ProjectModel,
  ProjectsResponseModel,
} from 'shared/domain/projects'

import { NftModel } from '../../../domain/nft'
import { validateAssetDetailsModel } from '../validation/asset-details-validation-model.ts'
import { validateAssetsResponseModel } from '../validation/assets-response-validation-model'
import { validateProjectsResponseModel } from '../validation/projects-response-validation-model'

const API_URL = import.meta.env.VITE_API_URL

export class ProjectsDatasourceImpl implements IProjectDatasource {
  constructor(private httpClient: IHttpClient) {}

  async getProjects(): Promise<ProjectsResponseModel> {
    const response: object = await this.httpClient.get(`${API_URL}/projects`)

    const valid = validateProjectsResponseModel(response)

    return new ProjectsResponseModel(
      valid.items.map(
        (item) =>
          new ProjectModel(
            null,
            item.count,
            item.industry,
            item.yearFounded,
            item.presentationUrl,
            item.contractAddress,
            item.minPrice,
            item.maxPrice
          )
      )
    )
  }

  async getAssets(contractAddress: string): Promise<AssetsResponseModel> {
    const response: object = await this.httpClient.get(
      `${API_URL}/project/${contractAddress}/assets`
    )

    const valid = validateAssetsResponseModel(response)

    return new AssetsResponseModel(
      valid.items.map(
        (item) =>
          new NftModel(
            item.contractAddress,
            item.tokenId,
            item.name,
            item.imageUrl,
            item.price,
            item.preIpoCount,
            0,
            item.discountPercent,
            item.tierCollectionId
          )
      )
    )
  }

  async getAssetDetails(params: {
    contractAddress: string
    tokenId: string
  }): Promise<AssetDetailsModel> {
    const response: object = await this.httpClient.get(
      `${API_URL}/project/${params.contractAddress}/asset/${params.tokenId}`
    )

    const valid = validateAssetDetailsModel(response)

    return new AssetDetailsModel(
      new ProjectModel(
        valid.projectLogoUrl,
        valid.projectAssetsCount,
        valid.projectIndustry,
        valid.projectYearFounded,
        valid.projectPresentationUrl,
        valid.contractAddress,
        valid.minPrice,
        valid.maxPrice
      ),
      new NftModel(
        valid.contractAddress,
        String(valid.assetId),
        valid.assetName,
        valid.assetImageUrl,
        valid.assetPrice,
        valid.assetPreIpoCount,
        0,
        valid.assetDiscountPercent,
        valid.assetTierCollectionId
      )
    )
  }
}
