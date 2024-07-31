import { IMailDatasource, SendParams } from '../../../domain/mail'
import { IHttpClient } from '../../network'

const API_URL = import.meta.env.VITE_API_URL

export class MailDatasource implements IMailDatasource {
  constructor(private httpClient: IHttpClient) {}

  async send(params: SendParams): Promise<void> {
    await this.httpClient.post(`${API_URL}/mail`, { email: params.email })
  }
  
  async save(email: string, address: string): Promise<void> {
    await this.httpClient.post(`${API_URL}/save-user`, { email, contractAddress: address })
  }
}
