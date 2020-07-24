import React from 'react';
import ReactDom from 'react-dom';


import TodoApp from './containers/app';
import { createStore } from 'redux';
import todos from './reducers';

// const store = {
//   todos: []
// }

const initialState = [
  { id: 1, name: 'Adjust webpack', checked: true},
  { id: 2, name: 'Run webpack-dev-server', checked: true},
  { id: 3, name: 'Wright ToDoApp', checked: false}
];

const store = createStore(todos, initialState);

ReactDom.render(
  <ToDoApp store={store}/>,
  document.querySelector('#app')
);
