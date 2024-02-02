import './ProjectSection.css';
import ProjectSectionListItem from './ProjectSectionListItem/ProjectSectionListItem';

export default function ProjectSection({ projects }) {
  return (
    <div className='project-section'>
      <div className='project-section__header'>
        <h2 className='project-section__title'>Projects</h2>
        <button className='project-section__add-project-btn' type='button'>
          <svg
            className='project-section__add-project-icon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 19 14'
          >
            <path d='M0 10H7V8H0M15 8V4H13V8H9V10H13V14H15V10H19V8M11 0H0V2H11M11 4H0V6H11V4Z' />
          </svg>
        </button>
      </div>
      <ul className='project-section__list'>
        {projects.map(project =>
          <ProjectSectionListItem key={project.id} project={project} />
        )}
      </ul>
    </div>
  );
}
