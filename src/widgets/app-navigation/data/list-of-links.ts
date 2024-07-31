import {
  IconFundsFilled,
  IconNftFilled,
  IconReferralFilled,
  IconStoreFilled,
  IconTicketFilled,
} from 'shared/assets/icons'
import { routeAbsolutePaths } from 'shared/router'

export const LIST_OF_LINKS = [
  {
    name: 'Assets',
    icon: IconFundsFilled,
    path: routeAbsolutePaths.assets,
  },
  {
    name: 'My NFTs',
    icon: IconNftFilled,
    path: routeAbsolutePaths.myWallet,
  },
  {
    name: 'Vouchers',
    icon: IconTicketFilled,
    path: routeAbsolutePaths.vouchers,
  },
  {
    name: 'Store',
    icon: IconStoreFilled,
    path: routeAbsolutePaths.store,
  },
  {
    name: 'Referral',
    icon: IconReferralFilled,
    path: routeAbsolutePaths.referral,
  },
]
