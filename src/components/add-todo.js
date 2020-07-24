import React from 'react';


const AddTodo = ({ addTodo }) => {

  return (
    <input
      type ="text"
      placeholder ="Enter your text"
      onKeyDown={ev => {
        if (ev.keyCode ===13) {
          addTodo(ev.target.value);
          ev.target.value ='';
        }
      }}
    />
  )
}


export default AddTodo;
