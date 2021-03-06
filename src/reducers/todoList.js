import {ADD_TODO, UPDATE, DELETE_TODO, SET_TODOS} from '../actions';

const todo = (todoList = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...todoList, { id: action.todo.id, text: action.todo.text, status: action.todo.status }];
    }
    case UPDATE: {
      return todoList.map((todo) => {
        if (todo.id === action.id) {
          return {
            id: todo.id,
            text: action.todo.text,
            status: action.todo.status
          }
        } else {
          return todo
        }
      });
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
