import {ADD_TODO, CHANGE_STATUS, DELETE_TODO, SET_TODOS} from '../actions';

const addTodo = (todoList = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...todoList, {id: action.id, text: action.text, status: "UNDONE"}];
    }
    case CHANGE_STATUS: {
      const newTodoList = [...todoList];
      const index = newTodoList.findIndex((todo) => {
        return todo.id === action.id
      });
      newTodoList[index].status = newTodoList[index].status === 'DONE' ? 'UNDONE' : 'DONE';
      return newTodoList;
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

export default addTodo;
