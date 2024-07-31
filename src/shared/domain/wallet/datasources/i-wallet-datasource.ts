import { VoucherModel } from '../../voucher'
import { WalletAssetsResponseModel } from '../models/wallet-assets-response-model.ts'
import { WalletVouchersResponseModel } from '../models/wallet-vouchers-response-model.ts'

export interface IWalletDatasource {
  getAssets(params: {
    walletAddress: string
    contractAddress: string
  }): Promise<WalletAssetsResponseModel>
  getVouchers(): Promise<WalletVouchersResponseModel>
  getVoucherDetails(id: string): Promise<VoucherModel>
}
