export interface SendParams {
  email: string
}

export interface IMailDatasource {
  send(params: SendParams): Promise<void>
  save(email: string, address: string): Promise<void>
}
