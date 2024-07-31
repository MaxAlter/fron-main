import { NftRemainingModel } from "../models/nft-remaining";

export interface INftDataSource {
  getRemainingNftsFromCollection(collectionAddress: string): Promise<NftRemainingModel[]>
}
