import { IHttpClient } from 'shared/data/network'
import {
  IOptionsDatasource,
  OptionsModel,
  OptionsUrlModel,
  OptionsVoucherCollectionModel,
} from 'shared/domain/options'

import { validateOptionsModel } from '../validation/options-validation-model'

const API_URL = import.meta.env.VITE_API_URL

export class OptionsDatasourceImpl implements IOptionsDatasource {
  constructor(private httpClient: IHttpClient) {}

  async get(): Promise<OptionsModel> {
    const response: object = await this.httpClient.get(`${API_URL}/options`)

    const valid = validateOptionsModel(response)

    return new OptionsModel(
      new OptionsUrlModel(
        valid.urls.termsUrl,
        valid.urls.activationVideoUrl,
        valid.urls.marketplaceUrl,
        valid.urls.voucherUrl,
        valid.urls.amlPolicy,
        valid.urls.dataProtectionPolicy,
        valid.urls.investorAccreditedStatus,
        valid.urls.refundPolicy
      ),
      new OptionsVoucherCollectionModel(valid.voucherCollection.contractAddress)
    )
  }
}
