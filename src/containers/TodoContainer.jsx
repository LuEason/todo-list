import Todo from '../components/Todo'
import {connect} from 'react-redux'
import {update} from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    update: (id, todo) => {
      dispatch(update(id, todo))
    }
  }
};

const TodoContainer = connect(null, mapDispatchToProps)(Todo);

export default TodoContainer;
