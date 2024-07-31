import { NftModel } from 'shared/domain/nft'
import { ProjectModel } from 'shared/domain/projects'

export class AssetDetailsModel {
  constructor(
    readonly project: ProjectModel,
    readonly asset: NftModel
  ) {}
}
