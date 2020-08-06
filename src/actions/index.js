export const ADD_TODO = "ADD_TODO";
export const UPDATE = "UPDATE";
export const DELETE_TODO = "DELETE_TODO";
export const SET_TODOS = "SET_TODOS";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function update(id, todo) {
  return {
    type: UPDATE,
    id,
    todo
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
