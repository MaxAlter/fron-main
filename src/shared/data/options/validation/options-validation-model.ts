import zod from 'zod'

import { MODEL_VALIDATION_ERROR_MESSAGE, ValidationException } from '../../network'
import { OptionUrlsValidationModel } from './option-urls-validation-model'
import { OptionsVoucherCollectionValidationModel } from './options-voucher-collection-validation-model'

export const OptionsValidationModel = zod.object({
  urls: OptionUrlsValidationModel,
  voucherCollection: OptionsVoucherCollectionValidationModel,
})

export const validateOptionsModel = (data: object) => {
  try {
    return OptionsValidationModel.parse(data)
  } catch {
    throw new ValidationException(MODEL_VALIDATION_ERROR_MESSAGE)
  }
}
