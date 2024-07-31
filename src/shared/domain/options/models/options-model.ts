import { OptionsUrlModel } from './options-url-model'
import { OptionsVoucherCollectionModel } from './options-voucher-collection-model'

export class OptionsModel {
  constructor(
    readonly urls: OptionsUrlModel,
    readonly voucherCollection: OptionsVoucherCollectionModel
  ) {}
}
