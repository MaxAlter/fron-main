import zod from 'zod'

import { INDUSTRY } from '../../../domain/projects'
import { MODEL_VALIDATION_ERROR_MESSAGE, ValidationException } from '../../network'

const AssetDetailsValidationModel = zod.object({
  contractAddress: zod.string(),
  projectAssetsCount: zod.number(),
  projectIndustry: zod.nativeEnum(INDUSTRY),
  projectYearFounded: zod.string(),
  projectPresentationUrl: zod.string(),
  projectLogoUrl: zod.string(),
  assetId: zod.string(),
  assetName: zod.string(),
  assetImageUrl: zod.string(),
  assetPrice: zod.string(),
  assetTierCollectionId: zod.number(),
  assetPreIpoCount: zod.number(),
  assetDiscountPercent: zod.number().nullable(),
  minPrice: zod.string(),
  maxPrice: zod.string(),
})

export const validateAssetDetailsModel = (data: object) => {
  try {
    return AssetDetailsValidationModel.parse(data)
  } catch {
    throw new ValidationException(MODEL_VALIDATION_ERROR_MESSAGE)
  }
}
