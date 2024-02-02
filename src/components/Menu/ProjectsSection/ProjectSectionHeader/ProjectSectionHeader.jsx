import { useState } from 'react';
import './ProjectSectionHeader.css';

export default function ProjectSectionHeader({ addProject }) {
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProjectTitle, setNewProjectTitle] = useState('');

  function cancelForm() {
    setIsAddingProject(false);
    setNewProjectTitle('');
  }

  return (
    isAddingProject
      ? (
        <form
          className='project-section__header'
          onSubmit={(e) => {
            e.preventDefault();
            addProject(newProjectTitle);
            setNewProjectTitle('');
            setIsAddingProject(false);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              cancelForm();
            }
          }}
        >
          <input
            className='project-section__add-project-input'
            type='text'
            name='new-project-name'
            placeholder='New project title'
            value={newProjectTitle}
            onChange={(e) => setNewProjectTitle(e.target.value)}
          />
          <button className='project-section__add-project-btn' type='reset'>
            <svg
              className='project-section__add-project-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              onClick={cancelForm}
            >
              <path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' />
            </svg>
          </button>
          <button className='project-section__add-project-btn' type='submit'>
            <svg
              className='project-section__add-project-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' />
            </svg>
          </button>
        </form>
      )
      : (
        <div className='project-section__header'>
          <h2 className='project-section__title'>Projects</h2>
          <button
            className='project-section__add-project-btn'
            type='button'
            onClick={() => setIsAddingProject(true)}
          >
            <svg
              className='project-section__add-project-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 19 14'
            >
              <path d='M0 10H7V8H0M15 8V4H13V8H9V10H13V14H15V10H19V8M11 0H0V2H11M11 4H0V6H11V4Z' />
            </svg>
          </button>
        </div>
      )
  );
}
