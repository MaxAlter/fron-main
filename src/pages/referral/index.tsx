import { WithActionsLayout } from 'shared/ui/layouts'

import Share from './components/share'
import Stats from './components/stats'
import './styles.scss'

const ReferralPage: React.FC = () => {
  return (
    <WithActionsLayout className="referral-content">
      <Share />
      <Stats />
    </WithActionsLayout>
  )
}

export default ReferralPage
