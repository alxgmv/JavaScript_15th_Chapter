const todos = (state =[], action) => {


  // let action1 = {
  //   type: 'Add_TODO',
  //   nameL: 'Learn Redux'
  // };
  //
  // let action2 = {
  //   type: 'TOGGLE_TODO',
  //   id: 2
  // }


  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: action.id, name: action.name, checked: false }

      ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id ) {
          return { id: todo.id, name: action.name, checked: !todo.checked }
        }
        return todo;
      })

    default:
      return state;
  }
}

export default todos;
