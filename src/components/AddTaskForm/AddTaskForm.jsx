import { useEffect, useState } from 'react';
import './AddTaskForm.css';


export default function AddTaskForm({ id, projects, closeForm, addTodo, editTodo }) {
  const [projectId, setProjectId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [important, setImportant] = useState(false);

  useEffect(() => {
    if (id !== null) {
      for (const project of projects) {
        for (const todo of project.todos) {
          if (todo.id === id) {
            setProjectId(project.id);
            setTitle(todo.title);
            setDescription(todo.description);
            setDueDate(todo.dueDate);
            setImportant(todo.important);
          }
        }
      }
    }

    return () => {
      setProjectId('');
      setTitle('');
      setDescription('');
      setDueDate('');
      setImportant(false);
    };
  }, [id, projects]);

  return (
    <div
      className='add-task-form-wrapper'
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          closeForm();
        }
      }}
      onClick={closeForm}
    >
      <form
        className='add-task-form'
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault();
          if (projectId !== '' && title !== '' && dueDate !== '') {
            const formData = {
              projectId: projectId,
              title: title,
              description: description,
              dueDate: dueDate,
              important: important
            };
            if (id === null) {
              addTodo(formData);
            } else {
              editTodo(id, formData);
            }
            closeForm();
          }
        }}
      >
        <label className='add-task-form__label'>
          Choose project:
          <select
            className='add-task-form__select'
            name='select-project'
            autoFocus
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
          >
            {
              <option value=''>Select project</option>
            }
            {
              projects.map(project =>
                <option key={project.id} value={project.id}>
                  {project.title}
                </option>
              )
            }
          </select>
        </label>
        <label className='add-task-form__label'>
          Task title:
          <input
            className='add-task-form__text-input'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className='add-task-form__label'>
          Task description:
          <textarea
            className='add-task-form__textarea'
            name='task-description'
            rows='3'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
          </textarea>
        </label>
        <label className='add-task-form__label'>
          Due Date:
          <input
            className='add-task-form__date-input'
            type='date'
            name='task-due-date'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <label className='add-task-form__label add-task-form__label--important'>
          Important:
          <input
            className='add-task-form__checkbox'
            type='checkbox'
            name='important-checkbox'
            checked={important}
            onChange={(e) => setImportant(e.target.checked)}
          />
        </label>
        <div className='add-task-form__buttons'>
          <button
            className='add-task-form__button'
            type='reset'
            onClick={() => {
              setProjectId('');
              setTitle('');
              setDescription('');
              setDueDate('');
              setImportant(false);
              closeForm();
            }}
          >
            Cancel
          </button>
          <button
            className='add-task-form__button add-task-form__button--submit-button'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
