import React from 'react'
import ProjectItem from './ProjectItem';

const Project = (props) => {
  return (
    <>
      {props.projects.map(project =>{
          return <ProjectItem key={project.id} proj={project} onDelete={props.onDelete} />
      })}
    </>
  )
}

export default Project;
