import TodoList from '../../../components/TodoList/DoneTodoList'
import {connect} from 'react-redux'
import {deleteTodo, setTodos} from '../../../actions'

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList.filter((todo) => {
      return todo.status === "DONE";
    })
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (index) => {
      dispatch(deleteTodo(index))
    },
    setTodos: (todos) => {
      dispatch(setTodos(todos))
    }
  }
};

const DoneTodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default DoneTodoListContainer;
