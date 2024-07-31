import { IconCopyLink, IconShareTelegram } from 'shared/assets/icons'
import { palette } from 'shared/assets/styles'
import { ButtonPrimary } from 'shared/ui/buttons'
import { WithActionsLayout } from 'shared/ui/layouts'
import Typography from 'shared/ui/typography'

import './styles.scss'

const Share: React.FC = () => {
  return (
    <WithActionsLayout className="share-content">
      <Typography
        className="share-content_title"
        size="24"
        weight="700"
        tag="p"
      >
        Share your unique URL
      </Typography>
      <Typography
        className="share-content_text"
        size="16"
        weight="500"
        tag="p"
      >
        Copy to unique link and share it with your friends and followers
      </Typography>
      <div className="share-content_inputBox">
        <input
          name="share"
          className="share-content_inputBox_input"
        />
        <ButtonPrimary className="share-content_inputBox_copy">
          <IconCopyLink
            width={18}
            height={20}
          />
        </ButtonPrimary>
      </div>
      <ButtonPrimary className="share-content_telegram">
        <IconShareTelegram
          width={20}
          height={20}
        />
        <Typography
          size="16"
          weight="600"
          color={palette.white}
          className="share-content_telegram_text"
        >
          Share via Telegram
        </Typography>
      </ButtonPrimary>
    </WithActionsLayout>
  )
}

export default Share
