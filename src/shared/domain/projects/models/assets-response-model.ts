import { NftModel } from 'shared/domain/nft'

export class AssetsResponseModel {
  constructor(readonly items: NftModel[]) {}
}
