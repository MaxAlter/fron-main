import { HTTP_ERROR_NETWORK_MESSAGE } from './constants'
import { HttpException } from './exceptions'
import { getMessageByErrorCode } from './formatters'
import { IHttpClient, THeaders, TParams, TPayload } from './i-http-clinet.ts'
import { constructQueryParameters } from './utils'

export class FetchHttpClient implements IHttpClient {
  async get<TResult>(url: string, params?: TParams, headers?: THeaders): Promise<TResult> {
    const request = {
      method: 'GET',
      ...(params ? { queryParams: params } : {}),
      ...(headers ? { headers } : {}),
    } as RequestInit

    const response = await this.fetch(url, request)
    const body = await response.json()

    return body as TResult
  }

  async post<TResult>(url: string, payload: TPayload = null, headers?: THeaders): Promise<TResult> {
    const request = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(headers ?? {}),
      },
      body: payload ? JSON.stringify(payload) : null,
    } as RequestInit

    const response = await this.fetch(url, request)
    const body = await response.json()

    return body as TResult
  }

  async put<TResult>(url: string, payload: TPayload = null, headers?: THeaders): Promise<TResult> {
    const request = {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        ...(headers ?? {}),
      },
      body: payload ? JSON.stringify(payload) : null,
    } as RequestInit

    const response = await this.fetch(url, request)
    const body = await response.json()

    return body as TResult
  }

  async fetch(url: string, options: RequestInit): Promise<Response> {
    let response
    let requestUrl = url

    if (options.queryParams) {
      requestUrl = requestUrl + constructQueryParameters(options.queryParams)
    }

    try {
      response = await fetch(requestUrl, { credentials: 'include', ...options })
    } catch (error) {
      throw new HttpException(HTTP_ERROR_NETWORK_MESSAGE, String(error))
    }

    if (response.ok) {
      return response
    }

    const json = await response.json()

    throw new HttpException(
      getMessageByErrorCode(response.status),
      json,
      response.status,
      json.code
    )
  }
}
