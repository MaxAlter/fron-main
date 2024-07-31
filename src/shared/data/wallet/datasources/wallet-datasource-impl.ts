import { ImageVoucherTest } from 'shared/assets/images'
import { IHttpClient } from 'shared/data/network'
import { getTraitValueByType } from 'shared/data/nft'
import { validateVoucherModel } from 'shared/data/voucher'
import { NftModel } from 'shared/domain/nft'
import { VoucherModel } from 'shared/domain/voucher'
import {
  IWalletDatasource,
  WalletAssetsResponseModel,
  WalletVouchersResponseModel,
} from 'shared/domain/wallet'

import { TRAIT_TYPE } from '../../../domain/nft/enums'
import { HttpException } from '../../network'
import { validateWalletAssetsResponseModel } from '../validation/wallet-assets-response-validation-model.ts'
import { validateWalletVouchersResponseModel } from '../validation/wallet-vouchers-response-validation-model.ts'

const vouchersMockList = {
  items: [
    {
      id: `1`,
      name: 'Tier 1',
      imageUrl: ImageVoucherTest,
      discountPercent: 1000,
    },
    {
      id: `2`,
      name: 'Tier 2',
      imageUrl: ImageVoucherTest,
      discountPercent: 1000,
    },
  ],
}

const TON_API_URL = import.meta.env.VITE_API_RPC_URL

export class WalletDatasourceImpl implements IWalletDatasource {
  constructor(private httpClient: IHttpClient) {}

  async getAssets(params: {
    walletAddress: string
    contractAddress: string
  }): Promise<WalletAssetsResponseModel> {
    const response: object = await this.httpClient.get(
      `${TON_API_URL}/accounts/${params.walletAddress}/nfts?collection=${params.contractAddress}`
    )

    const valid = validateWalletAssetsResponseModel(response)

    return new WalletAssetsResponseModel(
      valid.nft_items.map((item, index) => {
        const tierId = getTraitValueByType(item.metadata.attributes, TRAIT_TYPE.TIER)

        return new NftModel(
          item.collection.address,
          String(index),
          item.metadata.name,
          item.metadata.image,
          '0',
          0,
          0,
          null,
          tierId ? Number(tierId) : 0
        )
      })
    )
  }

  async getVouchers(): Promise<WalletVouchersResponseModel> {
    const response: object = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(vouchersMockList)
      }, 400)
    })

    const valid = validateWalletVouchersResponseModel(response)

    return new WalletVouchersResponseModel(
      valid.items.map(
        (item) => new VoucherModel(item.id, item.name, item.imageUrl, item.discountPercent)
      )
    )
  }

  async getVoucherDetails(id: string): Promise<VoucherModel> {
    const foundItem = vouchersMockList.items.find((item) => item.id === id)

    if (!foundItem) throw new HttpException('Voucher not found', '', 404)

    const response: object = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(foundItem)
      }, 1500)
    })

    const valid = validateVoucherModel(response)

    return new VoucherModel(valid.id, valid.name, valid.imageUrl, valid.discountPercent)
  }
}
