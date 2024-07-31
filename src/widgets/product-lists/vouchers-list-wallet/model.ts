import { createEffect, createEvent, createStore } from 'effector'

import { FetchHttpClient } from 'shared/data/network'
import { WalletDatasourceImpl } from 'shared/data/wallet'
import { VoucherModel } from 'shared/domain/voucher'

const httpClient = new FetchHttpClient()
const walletDatasource = new WalletDatasourceImpl(httpClient)

export const componentReady = createEvent()

const getVouchersFx = createEffect(walletDatasource.getVouchers)

export const $vouchers = createStore<VoucherModel[]>([])
export const $loading = getVouchersFx.pending

$vouchers.on(getVouchersFx.done, (_, { result }) => result.items)

componentReady.watch(async () => {
  await getVouchersFx()
})
