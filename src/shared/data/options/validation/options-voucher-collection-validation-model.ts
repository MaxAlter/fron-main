import zod from 'zod'

export const OptionsVoucherCollectionValidationModel = zod.object({
  contractAddress: zod.string(),
})
