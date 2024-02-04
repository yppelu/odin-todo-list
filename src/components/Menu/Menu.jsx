import './Menu.css';

import HomeSection from './HomeSection/HomeSection';
import ProjectSection from './ProjectsSection/ProjectSection';

export default function Menu({ isMenuCollapsed, collapseMenu, addTask, projects, setNewProject, editProject, removeProject, setContentId, contentId }) {
  return (
    <div className={isMenuCollapsed ? 'menu menu--collapsed' : 'menu'}>
      <div className='menu__header'>
        <svg
          className='menu__logo'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M21,17V8H7V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H7C5.89,19 5,18.1 5,17V5A2,2 0 0,1 7,3H8V1H10V3H18V1H20V3H21M17.53,11.06L13.09,15.5L10.41,12.82L11.47,11.76L13.09,13.38L16.47,10L17.53,11.06M3,21H17V23H3C1.89,23 1,22.1 1,21V9H3V21Z' />
        </svg>
        <h1 className='menu__title'>Your ToDo List</h1>
      </div>
      <button className='menu__add-task-btn' type='button' onClick={() => addTask(null)}>
        <svg
          className='menu__add-task-icon'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 14 14'
        >
          <path d='M13.5 7.5H7.5V13.5H6V7.5H0V6H6V0H7.5V6H13.5V7.5Z' />
        </svg>
        Add task
      </button>
      <HomeSection collapseMenu={collapseMenu} setContentId={setContentId} contentId={contentId} />
      <ProjectSection
        collapseMenu={collapseMenu}
        projects={projects}
        editProject={editProject}
        removeProject={removeProject}
        setNewProject={setNewProject}
        setContentId={setContentId}
        contentId={contentId}
      />
    </div>
  );
}
