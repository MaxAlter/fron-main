import zod from 'zod'

export const OptionUrlsValidationModel = zod.object({
  termsUrl: zod.string(),
  activationVideoUrl: zod.string(),
  marketplaceUrl: zod.string(),
  voucherUrl: zod.string(),
  amlPolicy: zod.string(),
  dataProtectionPolicy: zod.string(),
  refundPolicy: zod.string(),
  investorAccreditedStatus: zod.string(),
})
