import { INDUSTRY } from 'shared/domain/projects'

export interface IProject {
  minPrice: string
  maxPrice: string
  count: number
  industry: INDUSTRY
  yearFounded: string
  presentation_url?: StringOrNull
}
