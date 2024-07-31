import { INDUSTRY } from 'shared/domain/projects'

export const formatIndustryByTypeToString = (type: INDUSTRY): string => {
  switch (type) {
    case INDUSTRY.OTHER_HARDWARE:
      return 'Other hardware'
    default:
      return 'Unknown'
  }
}
