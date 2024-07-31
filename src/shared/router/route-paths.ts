import { routeAbsolutePaths } from './route-absolute-paths.ts'

export const routePaths = {
  assets: routeAbsolutePaths.assets,
  assetDetails: `${routeAbsolutePaths.assets}/:contractAddress/:tokenId`,
  myWallet: routeAbsolutePaths.myWallet,
  myWalletAssetDetails: `${routeAbsolutePaths.myWalletAssetDetails}/:contractAddress/:tokenId`,
  myWalletVoucherDetails: `${routeAbsolutePaths.myWalletVoucherDetails}/:id`,
  vouchers: routeAbsolutePaths.vouchers,
  store: routeAbsolutePaths.store,
  referral: routeAbsolutePaths.referral,
}
