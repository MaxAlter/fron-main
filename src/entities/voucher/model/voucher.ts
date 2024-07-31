import { CollectionNameEnum } from 'shared/enums'

export interface IVoucher {
  tier: string
  discount: number
  collection: CollectionNameEnum
}
