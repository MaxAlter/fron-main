import { ZodRawShape, object, string } from 'zod'

interface SchemaRules {
  description?: string
  required_error?: string
  invalid_type_error?: string
}

export const REQUIRED_FIELD_MESSAGE = 'Required field'

export const INVALID_EMAIL_ADDRESS = 'Invalid email'

export const RESTRICTED_SYMBOLS = 'Restricted symbols'

export const createCustomMessages = (data?: SchemaRules) => ({
  description: data?.description,
  invalid_type_error: data?.invalid_type_error || RESTRICTED_SYMBOLS,
  required_error: data?.required_error || REQUIRED_FIELD_MESSAGE,
})

export const objectSchema = (fields: ZodRawShape) => object(fields)

export const stringSchema = (options?: SchemaRules) => string(createCustomMessages(options)).trim()

export const requiredString = (message = REQUIRED_FIELD_MESSAGE) => stringSchema().min(1, message)
