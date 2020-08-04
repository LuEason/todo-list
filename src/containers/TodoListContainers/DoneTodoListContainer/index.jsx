import TodoList from '../../../components/TodoList/DoneTodoList'
import {connect} from 'react-redux'
import {deleteTodo} from '../../../actions'

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
    }
  }
};

const Index = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default Index;
