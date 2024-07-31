export enum DOCS_NAMES {
  AML_POLICY = 'amlPolicy',
  DATA_PROTECTION_POLICY = 'dataProtectionPolicy',
  TERMS_AND_CONDITIONS = 'termsAndConditions',
  REFUND_POLICY = 'refundPolicy',
  INVESTOR_ACCREDITED_STATUS = 'investorAccreditedStatus',
}

export enum FIELD_NAMES {
  EMAIL = 'email',
  DOCUMENTS = 'documents',
  VOUCHER = 'voucher',
}

export interface FormValues {
  [FIELD_NAMES.EMAIL]: string
  [FIELD_NAMES.VOUCHER]: boolean
  [FIELD_NAMES.DOCUMENTS]: Record<DOCS_NAMES, boolean>
}
