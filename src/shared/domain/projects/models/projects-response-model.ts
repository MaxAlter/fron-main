import { ProjectModel } from './project-model.ts'

export class ProjectsResponseModel {
  constructor(readonly items: ProjectModel[]) {}
}
