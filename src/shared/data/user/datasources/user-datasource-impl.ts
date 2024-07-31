import { IUserDatasource, UserModel } from '../../../domain/user'
import { IHttpClient } from '../../network'
import { validateTonUserModel } from '../validation/ton-user-validation-model'

const TON_API_URL = import.meta.env.VITE_API_RPC_URL

export class UserDatasourceImpl implements IUserDatasource {
  constructor(private httpClient: IHttpClient) {}

  async get(address: string): Promise<UserModel> {
    const response: object = await this.httpClient.get(`${TON_API_URL}/accounts/${address}`)

    const valid = validateTonUserModel(response)

    return new UserModel(String(valid?.balance || 0))
  }
}
