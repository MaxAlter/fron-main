import { WithActionsLayout } from 'shared/ui/layouts'
import Typography from 'shared/ui/typography'

import StatsItem from '../stats-item'
import { statsData } from './data/statsData'
import './styles.scss'

const Stats: React.FC = () => {
  return (
    <WithActionsLayout className="stats-content">
      <Typography
        size="24"
        weight="700"
        className="stats-content_title"
        tag="h3"
      >
        Referral Stats
      </Typography>
      <div className="stats-content_info">
        {statsData.map((item, index) => (
          <StatsItem
            key={index}
            title={item.title}
            titleLine={item.titleLine}
            value={item.value}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </WithActionsLayout>
  )
}

export default Stats
