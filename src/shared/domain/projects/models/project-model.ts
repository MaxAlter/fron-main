import { INDUSTRY } from '../enums'

export class ProjectModel {
  constructor(
    readonly logoUrl: StringOrNull,
    readonly count: number,
    readonly industry: INDUSTRY,
    readonly yearFounded: string,
    readonly presentationUrl: StringOrNull,
    readonly contractAddress: string,
    readonly minPrice: string,
    readonly maxPrice: string
  ) {}
}
