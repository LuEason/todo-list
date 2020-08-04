import TodoList from '../../../components/TodoList/AllTodoList'
import {connect} from 'react-redux'
import {deleteTodo} from '../../../actions'

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (id) => {
      dispatch(deleteTodo(id))
    }
  }
};

const Index = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default Index;
