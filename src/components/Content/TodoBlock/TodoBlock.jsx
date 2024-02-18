import './TodoBlock.css';

export default function TodoBlock({ id, title, description, dueDate, projectTitle, important, toggleImportant, editTodo, removeTodo }) {
  return (
    <div className='task'>
      <button
        className='task__complete-task-btn'
        type='button'
        onClick={() => removeTodo(id)}
      >
        <svg
          className='task__complete-task-icon'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' />
        </svg>
      </button>
      <div className='task__block-divider task__block-divider_main-info'>
        <h5 className='task__title'>{title}</h5>
        <p className='task__description'>{description}</p>
        <p className='task__due-date'>{dueDate}</p>
      </div><div className='task__block-divider'>
        <div className='task__control-buttons-block'>
          <button className='task__control-btn' type='button'>
            <svg
              className={important
                ? 'task__control-icon task__control-icon--chosen-important'
                : 'task__control-icon'}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              onClick={() => toggleImportant(id)}
            >
              <path d='M11 16H13V18H11V16M11 10H13V14H11V10M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 5V7H5V5H19M5 19V9H19V19H5Z' />
            </svg>
          </button>
          <button className='task__control-btn' type='button' onClick={() => editTodo(id)}>
            <svg
              className='task__control-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z' />
            </svg>
          </button>
          <button className='task__control-btn' type='button' onClick={() => removeTodo(id)}>
            <svg
              className='task__control-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' />
            </svg>
          </button>
        </div>
        <p className='task__containing-project-name'>{projectTitle}</p>
      </div>
    </div>
  );
}
