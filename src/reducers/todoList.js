import {ADD_TODO, CHANGE_STATUS, DELETE_TODO} from '../actions';
import {v1 as uuidv1} from 'uuid';

const addTodo = (todoList = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...todoList, {id: uuidv1(), text: action.text, status: "UNDONE"}];
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
    default: {
      return todoList;
    }
  }
};

export default addTodo;
