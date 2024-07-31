import { TRAIT_TYPE } from '../../../domain/nft/enums'
import { IAttribute } from '../types'

export const getTraitValueByType = (
  attributes: IAttribute[],
  traitType: TRAIT_TYPE
): StringOrNull => {
  return attributes.find((item) => item.trait_type === traitType)?.value || null
}
