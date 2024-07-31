export class OptionsUrlModel {
  constructor(
    readonly termsUrl: string,
    readonly activationVideoUrl: string,
    readonly marketplaceUrl: string,
    readonly voucherUrl: string,
    readonly amlPolicy: string,
    readonly dataProtectionPolicy: string,
    readonly investorAccreditedStatus: string,
    readonly refundPolicy: string
  ) {}
}
