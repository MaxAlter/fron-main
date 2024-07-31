import zod from 'zod'

import { TonNftValidationModel } from 'shared/data/nft'

import { MODEL_VALIDATION_ERROR_MESSAGE, ValidationException } from '../../network'

const WalletAssetsResponseValidationModel = zod.object({
  nft_items: zod.array(TonNftValidationModel),
})

export const validateWalletAssetsResponseModel = (data: object) => {
  try {
    return WalletAssetsResponseValidationModel.parse(data)
  } catch {
    throw new ValidationException(MODEL_VALIDATION_ERROR_MESSAGE)
  }
}
