import React from 'react'
import TodoContainer from '../../containers/TodoContainer'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        {
          this.props.todoList.map((todo, index) => {
            return <TodoContainer todo={todo} key={index} index={index} deleteTodo={this.props.deleteTodo}/>
          })
        }
      </div>
    )
  }
}

export default TodoList;
