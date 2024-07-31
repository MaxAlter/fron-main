import { HTTP_ERROR_NETWORK_MESSAGE } from '../constants'

export class HttpException extends Error {
  statusCode: number | undefined
  body: string
  code: string | undefined

  constructor(
    message = HTTP_ERROR_NETWORK_MESSAGE,
    body: string,
    statusCode?: number,
    code?: string
  ) {
    super(message)
    this.statusCode = statusCode
    this.body = body
    this.code = code
  }
}
