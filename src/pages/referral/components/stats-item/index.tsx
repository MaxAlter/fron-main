import { IconTonCoin } from 'shared/assets/icons'
import Typography from 'shared/ui/typography'

import { StatsItemProps } from '../stats/types'

const StatsItem: React.FC<StatsItemProps> = ({
  title,
  titleLine,
  value,
  description,
  icon,
}: StatsItemProps) => (
  <div className={`stats-content_${title && title.toLowerCase()}`}>
    <div className="stats-content_box">
      {title && (
        <Typography
          size="16"
          weight="600"
          tag="p"
          className="stats-content_text"
        >
          {title}
        </Typography>
      )}
      {titleLine && (
        <Typography
          size="14"
          weight="500"
          tag="p"
          className="stats-content_textLine"
        >
          {titleLine}
        </Typography>
      )}
      {icon ? (
        <div className="stats-content_tonBox">
          <IconTonCoin
            width={20}
            height={20}
            className="stats-content_tonBox_icon"
          />
          <Typography
            size="16"
            weight="600"
            tag="p"
            className="stats-content_text"
          >
            {value}
          </Typography>
        </div>
      ) : (
        <Typography
          size="16"
          weight="600"
          tag="p"
          className="stats-content_text"
        >
          {value}
        </Typography>
      )}
    </div>
    <Typography
      size="14"
      weight="500"
      tag="p"
      className="stats-content_desc"
    >
      {description}
    </Typography>
  </div>
)

export default StatsItem
