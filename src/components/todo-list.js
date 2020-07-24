import Reatc from 'react';

const TodoList = (props) => {
  const { todos, toggleTodo } = props;

  return(
    <div>
      <h2>Todo list</h2>
      <ol>
        {
          todos.map(todo => {
            const className = todo.checked ? 'checked' : '';
            return (
              <li
                key={todo.id}
                className={className}
                checked={todo.checked}
                onClick={ev => toggleTodo(todo.id)}
              >
                {todo.name}
              </li>
            )
          })
        }
      </ol>
    </div>
  );
}

export default TodoList;
