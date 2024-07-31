import zod from 'zod'

import { TRAIT_TYPE } from '../../../domain/nft/enums'

export const TonNftValidationModel = zod.object({
  address: zod.string(),
  index: zod.number(),
  owner: zod.object({
    address: zod.string(),
    is_scam: zod.boolean(),
    is_wallet: zod.boolean(),
  }),
  collection: zod.object({
    address: zod.string(),
    name: zod.string(),
    description: zod.string(),
  }),
  verified: zod.boolean(),
  approved_by: zod.string().array(),
  trust: zod.string(),
  previews: zod
    .object({
      resolution: zod.string(),
      url: zod.string(),
    })
    .array(),
  metadata: zod.object({
    description: zod.string(),
    name: zod.string(),
    image: zod.string(),
    attributes: zod
      .object({
        trait_type: zod.nativeEnum(TRAIT_TYPE),
        value: zod.string(),
      })
      .array(),
  }),
})
