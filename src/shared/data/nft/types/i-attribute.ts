import { TRAIT_TYPE } from '../../../domain/nft/enums'

export interface IAttribute {
  trait_type: TRAIT_TYPE
  value: string
}
