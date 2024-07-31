import { useTonAddress } from '@tonconnect/ui-react'

import { FetchHttpClient } from 'shared/data/network'
import { UserDatasourceImpl } from 'shared/data/user'

const httpClient = new FetchHttpClient()
const userDatasourceImpl = new UserDatasourceImpl(httpClient)

export const useCurrentBalance = () => {
  const address = useTonAddress()

  return async () => {
    const user = await userDatasourceImpl.get(address)

    return user.balance
  }
}
