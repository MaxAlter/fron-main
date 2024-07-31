import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'

import { INVALID_EMAIL_ADDRESS, objectSchema, requiredString } from 'shared/form'

import { DOCS_NAMES, FIELD_NAMES } from './types.ts'

export const validationSchema = zodResolver(
  objectSchema({
    // [FIELD_NAMES.VOUCHER]: zod.boolean(),
    [FIELD_NAMES.EMAIL]: requiredString().email(INVALID_EMAIL_ADDRESS),
    [FIELD_NAMES.DOCUMENTS]: objectSchema({
      [DOCS_NAMES.AML_POLICY]: zod.boolean(),
      [DOCS_NAMES.DATA_PROTECTION_POLICY]: zod.boolean(),
      [DOCS_NAMES.TERMS_AND_CONDITIONS]: zod.boolean(),
      [DOCS_NAMES.REFUND_POLICY]: zod.boolean(),
      [DOCS_NAMES.INVESTOR_ACCREDITED_STATUS]: zod.boolean(),
    }),
  })
)
