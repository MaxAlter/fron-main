import React from 'react'

import { Project } from 'entities/project'

import { ProjectModel } from 'shared/domain/projects'

type Props = {
  list: ProjectModel[]
}

const Projects: React.FC<Props> = ({ list }) => {
  return (
    <>
      {list.map((project) => (
        <Project
          key={project.contractAddress}
          count={project.count}
          minPrice={project.minPrice}
          maxPrice={project.maxPrice}
          industry={project.industry}
          yearFounded={project.yearFounded}
          presentation_url={project.presentationUrl}
        />
      ))}
    </>
  )
}

export default Projects
