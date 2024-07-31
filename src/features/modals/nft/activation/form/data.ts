import { FIELD_NAMES, FormValues } from './types'

const DEFAULT_VALUES: FormValues = {
  [FIELD_NAMES.EMAIL]: '',
}

export const getInitialValues = () => DEFAULT_VALUES
