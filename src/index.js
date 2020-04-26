import React from 'react';
import ReactDom from 'react-dom';

const HelloWorld = () => {
  return <h1>Hello React</h1>;
}


class ToDoApp extends React.Component {
  constructor() {
    super();

    this.state = {
      todos : [
        { name:'Install webpack ', checked: true },
        { name:'Launch webpack-dev-server', checked: true },
        { name: 'Write ToDoApp', checked: false }
      ]
    }
  }
  toggleToDo(key) {
    const todos = this.state.todos.map((todo, i) => {
      if (key === i) {
        return {
          name: todo.name,
          checked: !todo.checked
        }
      }
      else {
        return todo;
      }
    });

    this.setState({ todos });
  }

  addToDo(value) {
    console.log(value);
  }

  render() {
    return (
      <div>
      <ol>
        {
          this.state.todos.map((todo, i) => {
            const className = todo.checked ? 'checked' : '';
            return (
              <li
                key={i}
                className={className}
                onClick={ev => {this.toggleToDo(i)}}
              >
                {todo.name}
              </li>
            )
          })
        }
      </ol>

      <input
      type="text"
      placeholder="New Task"
      onKeyDown={ev =>{
        this.addToDo(ev.target.value);
      }}
      />
      </div>

    );
  }
}

ReactDom.render(
  <ToDoApp />,
  document.querySelector('#app')
);
