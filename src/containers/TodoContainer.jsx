import Todo from '../components/Todo'
import {connect} from 'react-redux'
import {changeStatus} from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    changeStatus: (index) => {
      dispatch(changeStatus(index))
    }
  }
};
const TodoContainer = connect(null, mapDispatchToProps)(Todo);

export default TodoContainer;
