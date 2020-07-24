import React from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';

import { addTodo, toggleTodo } from '../actions';

let App = (props) => {
  const {
    todos, addTodo, toggleTodo
  } = props;


  return (
    <div>
      <TodoList todos ={todos} toggleTodo={toggleTodo} />
      <AddTodo addTodo={addTodo}/>
    </div>
  )
}

const mapSateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (name) => dispatch(addTdod(name)),
    toggleTodo: (id) => dispatch(toggleTodo(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default App;
