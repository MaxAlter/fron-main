import { DOCS_NAMES, FIELD_NAMES, FormValues } from './types'

const DEFAULT_VALUES: FormValues = {
  [FIELD_NAMES.EMAIL]: '',
  [FIELD_NAMES.VOUCHER]: true,
  [FIELD_NAMES.DOCUMENTS]: Object.values(DOCS_NAMES).reduce(
    (obj, key) => ({
      ...obj,
      [key]: JSON.parse(localStorage.getItem(`${FIELD_NAMES.DOCUMENTS}.${key}`) || 'false'),
    }),
    {} as Record<DOCS_NAMES, boolean>
  ),
}

export const getInitialValues = () => DEFAULT_VALUES
