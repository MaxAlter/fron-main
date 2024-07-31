import { VALIDATION_ERROR_MESSAGE } from '../constants'

export class ValidationException extends Error {
  constructor(message = VALIDATION_ERROR_MESSAGE) {
    super(message)
  }
}
