import { OptionsModel } from '../models'

export interface IOptionsDatasource {
  get(): Promise<OptionsModel>
}
