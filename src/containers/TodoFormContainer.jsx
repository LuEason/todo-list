import TodoForm from '../components/TodoForm'
import {connect} from 'react-redux'
import {addTodo} from '../actions'


const mapDispatchToProps = dispatch => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text))
    }
  }
};
const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);

export default TodoFormContainer;
