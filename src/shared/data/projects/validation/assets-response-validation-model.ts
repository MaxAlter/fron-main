import zod from 'zod'

import { NftValidationModel } from 'shared/data/nft'

import { MODEL_VALIDATION_ERROR_MESSAGE, ValidationException } from '../../network'

const AssetsResponseValidationModel = zod.object({
  items: zod.array(NftValidationModel),
})

export const validateAssetsResponseModel = (data: object) => {
  try {
    return AssetsResponseValidationModel.parse(data)
  } catch {
    throw new ValidationException(MODEL_VALIDATION_ERROR_MESSAGE)
  }
}
