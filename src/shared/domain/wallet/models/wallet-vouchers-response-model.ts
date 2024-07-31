import { VoucherModel } from 'shared/domain/voucher'

export class WalletVouchersResponseModel {
  constructor(readonly items: VoucherModel[]) {}
}
