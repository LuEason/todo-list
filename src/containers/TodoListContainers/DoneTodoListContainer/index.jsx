import TodoList from '../../../components/TodoList/DoneTodoList'
import {connect} from 'react-redux'
import {deleteTodo} from '../../../actions'

const mapStateToProps = (state) => {
  const newList = state.todoList.filter((todo) => {
    return todo.status === "DONE";
  });
  console.log(newList);
  return {
    todoList: newList
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
