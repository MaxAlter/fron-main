import zod from 'zod'

import { MODEL_VALIDATION_ERROR_MESSAGE, ValidationException } from '../../network'

export const VoucherValidationModel = zod.object({
  id: zod.string(),
  name: zod.string(),
  imageUrl: zod.string().nullable(),
  discountPercent: zod.number(),
})

export const validateVoucherModel = (data: object) => {
  try {
    return VoucherValidationModel.parse(data)
  } catch {
    throw new ValidationException(MODEL_VALIDATION_ERROR_MESSAGE)
  }
}
