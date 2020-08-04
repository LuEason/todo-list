import React from 'react'
import TodoContainer from '../../../containers/TodoContainer'

class DoneTodoList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.todoList.map((todo, index) => {
            return <TodoContainer todo={todo} key={index} id={todo.id} deleteTodo={this.props.deleteTodo}/>
          })
        }
      </div>
    )
  }
}

export default DoneTodoList;
