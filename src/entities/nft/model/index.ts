import { CollectionNameEnum } from 'shared/enums'

export interface INft {
  name: string
  price: string
  ipoCount: number
  image?: StringOrNull
  discount?: NumberOrNull
  remainCount?: number
  collection?: CollectionNameEnum
  purchased?: boolean
}
