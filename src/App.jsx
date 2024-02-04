import { useEffect, useState } from 'react';

import { exampleData } from './helpers/exampleData.js';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content.jsx';

export default function App() {
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')) ?? exampleData);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(window.innerWidth <= 600);
  const [contentId, setContentId] = useState(2);

  const contentTitle = getTitleFromContentId(contentId);

  function getTitleFromContentId(id) {
    if (id === 0) return 'All Tasks';
    if (id === 1) return 'Important';
    if (id === 2) return 'Today';

    for (const project of projects) {
      if (project.id === id) return project.title;
    }
  }

  function getTasksForContentId(id) {
    const tasks = [];

    if (id === 0) {
      for (const project of projects) {
        tasks.push(...project.todos);
      }
    } else if (id === 1) {
      for (const project of projects) {
        tasks.push(...project.todos.filter(todo => todo.important));
      }
    } else if (id === 2) {
      const date = new Date();
      const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

      for (const project of projects) {
        tasks.push(...project.todos.filter(todo => todo.dueDate === today));
      }
    } else {
      for (const project of projects) {
        if (project.id === id) {
          tasks.push(...project.todos);
          break;
        }
      }
    }

    return tasks;
  }

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

  function handleSetContentId(id) {
    setContentId(id);
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

  function handleRemoveProject(id) {
    const newProjects = JSON.parse(JSON.stringify(projects)).filter(project => project.id !== id);
    setProjects(newProjects);
  }

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
        editProject={handleEditProject}
        removeProject={handleRemoveProject}
        setNewProject={handleSetNewProject}
        setContentId={handleSetContentId}
        contentId={contentId}
      />
      <Content title={contentTitle} content={getTasksForContentId(contentId)} />
    </>
  );
}
