import { NftModel } from 'shared/domain/nft'

export class WalletAssetsResponseModel {
  constructor(readonly items: NftModel[]) {}
}
