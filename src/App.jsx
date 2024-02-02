import { useEffect, useState } from 'react';

import Menu from './components/Menu/Menu';

export default function App() {
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')));

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

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
    <Menu
      projects={projects}
      setNewProject={handleSetNewProject}
      editProject={handleEditProject}
      removeProject={handleRemoveProject}
    />
  );
}
