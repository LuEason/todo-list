export const ADD_TODO = "ADD_TODO";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const DELETE_TODO = "DELETE_TODO";
export const SET_TODOS = "SET_TODOS";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function changeStatus(id) {
  return {
    type: CHANGE_STATUS,
    id
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    todos
  }
}
