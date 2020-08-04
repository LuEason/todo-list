import React from 'react'
import TodoContainer from '../../../containers/TodoContainer'
import TodoFormContainer from '../../../containers/TodoFormContainer'
import gateway from '../../../gateway'

class TodoList extends React.Component {
  componentDidMount() {
    gateway.list().then((res) => {
      this.props.setTodos(res.data);
    })
  }

  render() {
    return (
      <div>
        {
          this.props.todoList.map((todo, index) => {
            return <TodoContainer todo={todo} key={index} id={todo.id} deleteTodo={this.props.deleteTodo}/>
          })
        }
        <TodoFormContainer/>
      </div>
    )
  }
}

export default TodoList;
