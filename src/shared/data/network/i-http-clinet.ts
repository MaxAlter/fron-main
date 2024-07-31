export type TPayload = object | null
export type TParams = Record<string, string | string[] | number | boolean | undefined | null> | null
export type THeaders = Record<string, string>
export type TMethod = 'GET' | 'POST' | 'PUT'

export interface IHttpClient {
  get<TResult>(url: string, params?: TParams, headers?: THeaders): Promise<TResult>

  post<TResult>(url: string, payload: TPayload, headers?: THeaders): Promise<TResult>

  put<TResult>(url: string, payload: TPayload, headers?: THeaders): Promise<TResult>
}
