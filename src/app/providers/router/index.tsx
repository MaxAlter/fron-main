import React from 'react'
import { Route, Routes } from 'react-router-dom'

import {
  AssetDetailsPage,
  AssetsPage,
  MyWalletAssetDetailsPage,
  MyWalletPage,
  MyWalletVoucherDetailsPage,
  NotFoundPage,
  ReferralPage,
  StorePage,
  VoucherPage,
} from 'pages'

import 'pages/assets'

import { routePaths } from 'shared/router'

import PrivateView from './private-view'
import ScrollToTop from './scroll-to-top'

const RouterProvider: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path={routePaths.assets}
          index
          element={<AssetsPage />}
        />
         <Route path="/"  element={<AssetsPage />} />

        <Route
          path={routePaths.assetDetails}
          element={<AssetDetailsPage />}
        />

        <Route
          path={routePaths.myWallet}
          element={
            <PrivateView>
              <MyWalletPage />
            </PrivateView>
          }
        />

        <Route
          path={routePaths.myWalletAssetDetails}
          element={
            <PrivateView>
              <MyWalletAssetDetailsPage />
            </PrivateView>
          }
        />

        <Route
          path={routePaths.myWalletVoucherDetails}
          element={
            <PrivateView>
              <MyWalletVoucherDetailsPage />
            </PrivateView>
          }
        />

        <Route
          path={routePaths.vouchers}
          element={<VoucherPage />}
        />

        <Route
          path={routePaths.store}
          element={<StorePage />}
        />

        <Route
          path={routePaths.referral}
          element={<ReferralPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
      <ScrollToTop />
    </>
  )
}
export default RouterProvider
