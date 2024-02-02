import { useState } from 'react';

import { exampleData } from './helpers/exampleData.js';

import Menu from './components/Menu/Menu';

export default function App() {
  const [projects, setProjects] = useState(exampleData);

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
    <Menu projects={projects} setNewProject={handleSetNewProject} />
  );
}
