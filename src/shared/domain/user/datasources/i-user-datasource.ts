import { UserModel } from '../models/user-model'

export interface IUserDatasource {
  get(address: string): Promise<UserModel>
}
