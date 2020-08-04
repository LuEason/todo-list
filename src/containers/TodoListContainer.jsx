import TodoList from '../components/TodoList'
import {connect} from 'react-redux'
import {deleteTodo} from '../actions'

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
};
const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (index) => {
      dispatch(deleteTodo(index))
    }
  }
};
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
