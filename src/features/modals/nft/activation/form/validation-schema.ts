import { zodResolver } from '@hookform/resolvers/zod'

import { INVALID_EMAIL_ADDRESS, objectSchema, requiredString } from 'shared/form'

import { FIELD_NAMES } from './types.ts'

export const validationSchema = zodResolver(
  objectSchema({
    [FIELD_NAMES.EMAIL]: requiredString().email(INVALID_EMAIL_ADDRESS),
  })
)
