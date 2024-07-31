import zod from 'zod'

import { MODEL_VALIDATION_ERROR_MESSAGE, ValidationException } from '../../network'

export const TonUserValidationModel = zod.object({
  address: zod.string().optional(),
  balance: zod.number().optional(),
  last_activity: zod.number().optional(),
  status: zod.string().optional(),
  interfaces: zod.string().array().optional(),
  name: zod.string().optional(),
  is_scam: zod.boolean().optional(),
  icon: zod.string().optional(),
  memo_required: zod.boolean().optional(),
  get_methods: zod.string().array().optional(),
  is_suspended: zod.boolean().optional(),
  is_wallet: zod.boolean().optional(),
})

export const validateTonUserModel = (data: object) => {
  try {
    return TonUserValidationModel.optional().parse(data)
  } catch {
    throw new ValidationException(MODEL_VALIDATION_ERROR_MESSAGE)
  }
}
