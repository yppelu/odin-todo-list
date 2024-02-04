import './Content.css';
import TodoBlock from './TodoBlock/TodoBlock';

/* function getTodayDate() {
  const today = new Date();

  const yearAsString = String(today.getFullYear());

  const month = today.getMonth() + 1;
  const monthAsString = month < 10 ? '0' + month : String(month);

  const date = today.getDate();
  const dateAsString = date < 10 ? '0' + date : String(date);

  return `${yearAsString}-${monthAsString}-${dateAsString}`;
} */

export default function Content({ title, contentId, projects, toggleImportant, removeTodo }) {
  function prepareData() {
    const preparedData = {
      today: [],
      tomorrow: [],
      thisWeek: [],
      later: [],
      expired: []
    };

    if (contentId === 0) {
      for (const project of projects) {
        for (const todo of project.todos) {
          const diff = Date.now() - new Date(todo.dueDate + 'T00:00:00.000');
          if (diff <= 0) {
            preparedData.later.push(todo);
          } else if (diff > 0 && diff < 86400000) {
            preparedData.today.push(todo);
          } else if (diff < 86400000 * 2) {
            preparedData.tomorrow.push(todo);
          } else if (diff < 86400000 * 7) {
            preparedData.thisWeek.push(todo);
          } else {
            preparedData.expired.push(todo);
          }
        }
      }
    } if (contentId === 1) {
      for (const project of projects) {
        for (const todo of project.todos) {
          if (todo.important) {
            const diff = Date.now() - new Date(todo.dueDate + 'T00:00:00.000');
            if (diff <= 0) {
              preparedData.later.push(todo);
            } else if (diff > 0 && diff < 86400000) {
              preparedData.today.push(todo);
            } else if (diff < 86400000 * 2) {
              preparedData.tomorrow.push(todo);
            } else if (diff < 86400000 * 7) {
              preparedData.thisWeek.push(todo);
            } else {
              preparedData.expired.push(todo);
            }
          }
        }
      }
    } else if (contentId === 2) {
      for (const project of projects) {
        const todos = project.todos
          .filter(todo => {
            const diff = Date.now() - new Date(todo.dueDate + 'T00:00:00.000');
            return (diff > 0 && diff < 86400000);
          })
          .map(todo => {
            const expandedTodo = { ...todo };
            expandedTodo.projectTitle = project.title;
            return expandedTodo;
          });
        if (todos.length) preparedData.today.push(...todos);
      }
    } else {
      for (const project of projects) {
        if (project.id === contentId) {
          for (const todo of project.todos) {
            const diff = Date.now() - new Date(todo.dueDate + 'T00:00:00.000');
            if (diff <= 0) {
              preparedData.later.push(todo);
            } else if (diff > 0 && diff < 86400000) {
              preparedData.today.push(todo);
            } else if (diff < 86400000 * 2) {
              preparedData.tomorrow.push(todo);
            } else if (diff < 86400000 * 7) {
              preparedData.thisWeek.push(todo);
            } else {
              preparedData.expired.push(todo);
            }
          }
          break;
        }
      }
    }

    return preparedData;
  }

  const preparedData = prepareData();

  return (
    <main className='content'>
      <h3 className='content__title'>{title}</h3>
      <div className='content__project-section'>
        {
          preparedData.expired.length === 0 ? null :
            <>
              <h4 className='content__project-section-title'>Expired</h4>
              {
                preparedData.expired.map(todo =>
                  <TodoBlock
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    dueDate={todo.dueDate}
                    projectTitle={todo.projectTitle}
                    important={todo.important}
                    toggleImportant={toggleImportant}
                    removeTodo={removeTodo}
                  />
                )
              }
            </>
        }
        {
          preparedData.today.length === 0 ? null :
            <>
              <h4 className='content__project-section-title'>Today</h4>
              {
                preparedData.today.map(todo =>
                  <TodoBlock
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    dueDate='Today'
                    projectTitle={todo.projectTitle}
                    important={todo.important}
                    toggleImportant={toggleImportant}
                    removeTodo={removeTodo}
                  />
                )
              }
            </>
        }
        {
          preparedData.tomorrow.length === 0 ? null :
            <>
              <h4 className='content__project-section-title'>Tomorrow</h4>
              {
                preparedData.tomorrow.map(todo =>
                  <TodoBlock
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    dueDate='Tomorrow'
                    projectTitle={todo.projectTitle}
                    important={todo.important}
                    toggleImportant={toggleImportant}
                    removeTodo={removeTodo}
                  />
                )
              }
            </>
        }
        {
          preparedData.thisWeek.length === 0 ? null :
            <>
              <h4 className='content__project-section-title'>This week</h4>
              {
                preparedData.thisWeek.map(todo =>
                  <TodoBlock
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    dueDate={todo.dueDate}
                    projectTitle={todo.projectTitle}
                    important={todo.important}
                    toggleImportant={toggleImportant}
                    removeTodo={removeTodo}
                  />
                )
              }
            </>
        }
        {
          preparedData.later.length === 0 ? null :
            <>
              <h4 className='content__project-section-title'>Later</h4>
              {
                preparedData.later.map(todo =>
                  <TodoBlock
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    dueDate={todo.dueDate}
                    projectTitle={todo.projectTitle}
                    important={todo.important}
                    toggleImportant={toggleImportant}
                    removeTodo={removeTodo}
                  />
                )
              }
            </>
        }
      </div>
    </main>
  );
}
