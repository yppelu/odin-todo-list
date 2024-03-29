import { useEffect, useState } from 'react';

import Menu from './components/Menu/Menu';
import Content from './components/Content/Content.jsx';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.jsx';

export default function App() {
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')) ?? []);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(window.innerWidth <= 600);
  const [contentId, setContentId] = useState(2);
  const [isAddTaskFormOpen, setIsAddTaskFormOpen] = useState(false);
  const [idForAddTaskForm, setIdForAddTaskForm] = useState(null);

  const contentTitle = getTitleFromContentId(contentId);

  function getTitleFromContentId(id) {
    if (id === 0) return 'All Tasks';
    if (id === 1) return 'Important';
    if (id === 2) return 'Today';

    for (const project of projects) {
      if (project.id === id) return project.title;
    }
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

  function handleCollapseMenu() {
    if (window.innerWidth <= 600) setIsMenuCollapsed(true);
  }

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

  function handleOpenAddTaskForm(id) {
    if (id) {
      setIdForAddTaskForm(id);
    }
    setIsAddTaskFormOpen(true);
  }

  function handleCloseAddTaskForm() {
    setIdForAddTaskForm(null);
    setIsAddTaskFormOpen(false);
  }

  function handleAddTodo(data) {
    const newProjects = JSON.parse(JSON.stringify(projects));
    const projectId = Number(data.projectId);
    for (const project of newProjects) {
      if (project.id === projectId) {
        project.todos.push({
          id: Date.now(),
          title: data.title,
          description: data.description,
          dueDate: data.dueDate,
          important: data.important
        });
        setProjects(newProjects);
        return;
      }
    }
  }

  function handleEditTodo(id, data) {
    const newProjects = JSON.parse(JSON.stringify(projects));
    const projectId = Number(data.projectId);
    for (const project of newProjects) {
      if (project.id === projectId) {
        for (const todo of project.todos) {
          if (todo.id === id) {
            todo.title = data.title;
            todo.description = data.description;
            todo.dueDate = data.dueDate;
            todo.important = data.important;
            setProjects(newProjects);
            return;
          }
        }
      }
    }
  }

  function handleRemoveTodo(todoId) {
    const newProjects = JSON.parse(JSON.stringify(projects));
    for (const project of newProjects) {
      for (let i = 0; i < project.todos.length; i++) {
        if (project.todos[i].id === todoId) {
          project.todos.splice(i, 1);
          setProjects(newProjects);
          return;
        }
      }
    }
  }

  function handleToggleImportant(todoId) {
    const newProjects = JSON.parse(JSON.stringify(projects));
    for (const project of newProjects) {
      for (const todo of project.todos) {
        if (todo.id === todoId) {
          todo.important = !todo.important;
          setProjects(newProjects);
          return;
        }
      }
    }
  }

  return (
    <>
      {
        isAddTaskFormOpen
          ?
          <AddTaskForm
            id={idForAddTaskForm}
            projects={projects}
            closeForm={handleCloseAddTaskForm}
            editTodo={handleEditTodo}
            addTodo={handleAddTodo}
          />
          : null
      }
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
        collapseMenu={handleCollapseMenu}
        addTask={handleOpenAddTaskForm}
        projects={projects}
        editProject={handleEditProject}
        removeProject={handleRemoveProject}
        setNewProject={handleSetNewProject}
        setContentId={handleSetContentId}
        contentId={contentId}
      />
      <Content
        title={contentTitle}
        contentId={contentId}
        projects={projects}
        toggleImportant={handleToggleImportant}
        editTodo={handleOpenAddTaskForm}
        removeTodo={handleRemoveTodo}
      />
    </>
  );
}
