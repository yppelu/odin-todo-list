import { useState } from 'react';

import './ProjectSection.css';

import ProjectSectionListItem from './ProjectSectionListItem/ProjectSectionListItem';
import ProjectSectionHeader from './ProjectSectionHeader/ProjectSectionHeader';

export default function ProjectSection({ projects, setNewProject }) {
  const [isAddingProject, setIsAddingProject] = useState(false);

  function handleSetIsAddingProject(title) {
    if (isAddingProject) setNewProject(title);
    setIsAddingProject(!isAddingProject);
  }

  return (
    <div className='project-section'>
      <ProjectSectionHeader
        isAddingProject={isAddingProject}
        addProject={handleSetIsAddingProject}
      />
      <ul className='project-section__list'>
        {projects.map(project =>
          <ProjectSectionListItem key={project.id} project={project} />
        )}
      </ul>
    </div>
  );
}
