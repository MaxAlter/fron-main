import zod from 'zod'

import { MODEL_VALIDATION_ERROR_MESSAGE, ValidationException } from '../../network'

export const NftValidationModel = zod.object({
  contractAddress: zod.string(),
  tokenId: zod.string(),
  name: zod.string(),
  imageUrl: zod.string().nullable(),
  price: zod.string(),
  preIpoCount: zod.number(),
  tierCollectionId: zod.number(),
  discountPercent: zod.number().nullable(),
  dateCreate: zod.string(),
})

export const validateNftModel = (data: object) => {
  try {
    return NftValidationModel.parse(data)
  } catch {
    throw new ValidationException(MODEL_VALIDATION_ERROR_MESSAGE)
  }
}
