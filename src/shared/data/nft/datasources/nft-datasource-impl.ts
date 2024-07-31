import { Cell, Dictionary } from '@ton/ton'
import { Buffer } from 'buffer'

import { IHttpClient } from 'shared/data/network'
import { GetTiersDataResponse, INftDataSource, NftRemainingModel } from 'shared/domain/nft'

export class NftDatasourceImpl implements INftDataSource {
  constructor(private readonly httpClient: IHttpClient) {}

  async getRemainingNftsFromCollection(collectionAddress: string): Promise<NftRemainingModel[]> {
    const response = await this.requestWrapper<GetTiersDataResponse>(
      `/blockchain/accounts/${collectionAddress}/methods/get_tiers_data`
    )

    const slice =
      response.stack[0].type === 'cell'
        ? Cell.fromBoc(Buffer.from(response.stack[0].cell, 'hex'))[0].beginParse()
        : null

    if (slice === null) {
      throw new Error('Invalid response')
    }
    const tierRemainings = []

    const tiersDict = slice.loadDictDirect(Dictionary.Keys.Uint(64), Dictionary.Values.Cell())

    for (const tierKey of tiersDict.keys()) {
      const tierSlice = tiersDict.get(tierKey)?.beginParse()
      if (!tierSlice) {
        continue
      }

      tierSlice.loadCoins()

      const tierTotalSupply = tierSlice.loadUint(64)
      const tierMintedSupply = tierSlice.loadUint(64)

      tierRemainings.push(
        new NftRemainingModel(tierKey, tierTotalSupply, tierTotalSupply - tierMintedSupply)
      )
    }

    return tierRemainings
  }

  private async requestWrapper<T>(action: string): Promise<T> {
    return this.httpClient.get<T>(`${import.meta.env.VITE_API_RPC_URL}/${action}`)
  }
}
