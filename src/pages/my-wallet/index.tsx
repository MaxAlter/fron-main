import { useUnit } from 'effector-react'
import React from 'react'

// import { Tab, Tabs } from 'shared/ui/tabs'
import NftList from './components/nfts'
// import VouchersList from './components/vouchers'
import { $$myWalletPage } from './model.ts'
import './styles.scss'

const renderTabs = (value: number | string) => {
  switch (value) {
    case 1:
      return <NftList />
    // case 2:
    //   return <VouchersList />
    default:
      return null
  }
}

const MyWalletPage: React.FC = () => {
  const [tab] = useUnit([$$myWalletPage.$tab, $$myWalletPage.tabChanged])

  return (
    <div className="my-wallet-page">
      {/*<Tabs*/}
      {/*  value={tab}*/}
      {/*  onChange={tabChanged}*/}
      {/*>*/}
      {/*  <Tab>Assets</Tab>*/}
      {/*  /!*<Tab>Vouchers</Tab>*!/*/}
      {/*</Tabs>*/}

      <div className="my-wallet-page__content">{renderTabs(tab)}</div>
    </div>
  )
}

export default MyWalletPage
