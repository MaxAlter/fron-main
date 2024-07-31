import zod from 'zod'

import { INDUSTRY } from 'shared/domain/projects'

export const ProjectValidationModel = zod.object({
  logoUrl: zod.string().nullable(),
  count: zod.number(),
  industry: zod.nativeEnum(INDUSTRY),
  yearFounded: zod.string(),
  presentationUrl: zod.string().nullable(),
  contractAddress: zod.string(),
  minPrice: zod.string(),
  maxPrice: zod.string(),
})
