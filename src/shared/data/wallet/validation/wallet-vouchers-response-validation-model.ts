import zod from 'zod'

import { VoucherValidationModel } from 'shared/data/voucher'

import { MODEL_VALIDATION_ERROR_MESSAGE, ValidationException } from '../../network'

const WalletVouchersResponseValidationModel = zod.object({
  items: zod.array(VoucherValidationModel),
})

export const validateWalletVouchersResponseModel = (data: object) => {
  try {
    return WalletVouchersResponseValidationModel.parse(data)
  } catch {
    throw new ValidationException(MODEL_VALIDATION_ERROR_MESSAGE)
  }
}
