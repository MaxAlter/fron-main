export class VoucherModel {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly imageUrl: StringOrNull,
    readonly discountPercent: number
  ) {}
}
