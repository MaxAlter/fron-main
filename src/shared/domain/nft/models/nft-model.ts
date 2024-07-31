export class NftModel {
  constructor(
    readonly contractAddress: string,
    readonly tokenId: string,
    readonly name: string,
    readonly imageUrl: StringOrNull,
    readonly price: string,
    readonly preIpoCount: number,
    readonly preIpoRemainsCount: number,
    readonly discountPercent: NumberOrNull,
    readonly tierCollectionId: number
  ) {}
}
