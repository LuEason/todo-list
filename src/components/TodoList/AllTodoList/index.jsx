import React from 'react'
import TodoContainer from '../../../containers/TodoContainer'
import TodoFormContainer from '../../../containers/TodoFormContainer'

class TodoList extends React.Component {
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
