import React, { ReactNode } from 'react'

import { IconLedgerText } from 'shared/assets/icons'
import { CollectionNameEnum } from 'shared/enums'
import { classNames } from 'shared/utils'

import './style.scss'

type Props = {
  type: CollectionNameEnum
  className?: string
}

const renderCollectionName = (type: CollectionNameEnum): ReactNode => {
  switch (type) {
    case CollectionNameEnum.LEDGER:
      return <IconLedgerText />

    default:
      return null
  }
}

const CollectionName: React.FC<Props> = ({ type, className }) => {
  return (
    <div className={classNames('collection-name', className)}>{renderCollectionName(type)}</div>
  )
}

export default CollectionName
