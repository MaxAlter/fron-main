import { AssetDetailsModel, AssetsResponseModel, ProjectsResponseModel } from '../models'

export interface IProjectDatasource {
  getProjects(): Promise<ProjectsResponseModel>
  getAssets(contractAddress: string): Promise<AssetsResponseModel>
  getAssetDetails(params: { contractAddress: string; tokenId: string }): Promise<AssetDetailsModel>
}
