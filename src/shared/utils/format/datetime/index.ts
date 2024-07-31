import { format, setDefaultOptions } from 'date-fns'
import { enUS } from 'date-fns/locale'

setDefaultOptions({ locale: enUS })

const WRONG_DATE_FORMAT = 'Wrong date format'

const getDate = (date: string | Date) => {
  if (date instanceof Date) {
    return date
  }

  return new Date(date)
}

export const formatDate = (date: string | Date, pattern: string) => {
  const dateValue = getDate(date)

  if (!dateValue) return WRONG_DATE_FORMAT

  try {
    return format(dateValue, pattern)
  } catch {
    return WRONG_DATE_FORMAT
  }
}
