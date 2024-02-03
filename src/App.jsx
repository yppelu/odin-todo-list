import { useEffect, useState } from 'react';

import { exampleData } from './helpers/exampleData.js';
import Menu from './components/Menu/Menu';

export default function App() {
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')) ?? exampleData);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(window.innerWidth <= 600);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600) setIsMenuCollapsed(false);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleSetNewProject(title) {
    const newProjects = JSON.parse(JSON.stringify(projects));
    const newProject = {
      id: Date.now(),
      title: title,
      todos: []
    };
    newProjects.push(newProject);
    setProjects(newProjects);
  }

  function handleRemoveProject(id) {
    const newProjects = JSON.parse(JSON.stringify(projects)).filter(project => project.id !== id);
    setProjects(newProjects);
  }

  function handleEditProject(id, title) {
    const newProjects = JSON.parse(JSON.stringify(projects));
    for (const project of newProjects) {
      if (project.id === id) {
        project.title = title;
        break;
      }
    }
    setProjects(newProjects);
  }

  return (
    <>
      <button
        className={isMenuCollapsed ? 'open-menu-btn open-menu-btn-menu--collapsed' : 'open-menu-btn'}
        type='button'
        onClick={() => {
          setIsMenuCollapsed(!isMenuCollapsed);
        }}
      >
        <svg className='open-menu-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' />
        </svg>
      </button>
      <Menu
        isMenuCollapsed={isMenuCollapsed}
        projects={projects}
        setNewProject={handleSetNewProject}
        editProject={handleEditProject}
        removeProject={handleRemoveProject}
      />
    </>
  );
}
