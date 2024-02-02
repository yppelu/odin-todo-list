import './ProjectSection.css';

import ProjectSectionListItem from './ProjectSectionListItem/ProjectSectionListItem';
import ProjectSectionHeader from './ProjectSectionHeader/ProjectSectionHeader';

export default function ProjectSection({ projects, setNewProject, editProject, removeProject }) {
  function handleAddProject(title) { setNewProject(title); }

  return (
    <div className='project-section'>
      <ProjectSectionHeader addProject={handleAddProject} />
      <ul className='project-section__list'>
        {projects.map(project =>
          <ProjectSectionListItem
            key={project.id}
            id={project.id}
            title={project.title}
            editProject={editProject}
            removeProject={removeProject} />
        )}
      </ul>
    </div>
  );
}
