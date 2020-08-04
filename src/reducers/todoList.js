import {ADD_TODO, CHANGE_STATUS, DELETE_TODO} from '../actions';

const addTodo = (todoList = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...todoList, {text: action.text, status: "UNDONE"}];
    }
    case CHANGE_STATUS: {
      const newTodoList = [...todoList];
      newTodoList[action.index].status = newTodoList[action.index].status === 'DONE' ? 'UNDONE' : 'DONE';
      return newTodoList;
    }
    case DELETE_TODO: {
      return todoList.filter((todo, index) => {
        return index !== action.index
      });
    }
    default: {
      return todoList;
    }
  }
};

export default addTodo;
