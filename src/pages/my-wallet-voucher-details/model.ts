import { createEffect, createEvent, createStore } from 'effector'

import { FetchHttpClient } from 'shared/data/network'
import { WalletDatasourceImpl } from 'shared/data/wallet'
import { VoucherModel } from 'shared/domain/voucher'

const httpClient = new FetchHttpClient()
const walletDatasource = new WalletDatasourceImpl(httpClient)

export const pageReady = createEvent<string>()

const getVoucherDetailsFx = createEffect(walletDatasource.getVoucherDetails.bind(walletDatasource))

export const $details = createStore<ValueOrNull<VoucherModel>>(null)
export const $loading = getVoucherDetailsFx.pending

$details.on(getVoucherDetailsFx.done, (_, { result }) => result)

pageReady.watch(async (id) => {
  await getVoucherDetailsFx(id)
})
