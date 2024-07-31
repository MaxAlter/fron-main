import zod from 'zod'

import { MODEL_VALIDATION_ERROR_MESSAGE, ValidationException } from '../../network'
import { ProjectValidationModel } from './project-validation-model.ts'

const ProjectsResponseValidationModel = zod.object({
  items: zod.array(ProjectValidationModel),
})

export const validateProjectsResponseModel = (data: object) => {
  try {
    return ProjectsResponseValidationModel.parse(data)
  } catch {
    throw new ValidationException(MODEL_VALIDATION_ERROR_MESSAGE)
  }
}
