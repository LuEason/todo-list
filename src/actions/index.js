export const ADD_TODO = "ADD_TODO";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const DELETE_TODO = "DELETE_TODO";

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
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
