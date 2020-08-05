import React from 'react'
import TodoContainer from '../../../containers/TodoContainer'
import gateway from '../../../gateway'

class DoneTodoList extends React.Component {
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
      </div>
    )
  }
}

export default DoneTodoList;
