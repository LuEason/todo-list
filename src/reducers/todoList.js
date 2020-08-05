import { ADD_TODO, CHANGE_STATUS, DELETE_TODO, SET_TODOS } from '../actions';

const todo = (todoList = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...todoList, { id: action.todo.id, text: action.todo.text, status: action.todo.status }];
    }
    case CHANGE_STATUS: {
      return todoList.map((todo) => {
        return {
          id: todo.id,
          text: todo.text,
          status: todo === action.id ? (todo.status === 'DONE' ? 'UNDONE' : 'DONE') : todo.status
        }
      })
    }
    case DELETE_TODO: {
      return todoList.filter((todo) => {
        return todo.id !== action.id
      });
    }
    case SET_TODOS: {
      return action.todos;
    }
    default: {
      return todoList;
    }
  }
};

export default todo;
