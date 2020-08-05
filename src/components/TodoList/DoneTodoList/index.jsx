import React from 'react'
import TodoContainer from '../../../containers/TodoContainer'
import gateway from '../../../gateway'
import { Empty } from 'antd';
import './index.css';

class DoneTodoList extends React.Component {
  componentDidMount() {
    gateway.list().then((res) => {
      this.props.setTodos(res.data);
    })
  }

  render() {
    return (
      <div className="rout">
        <div className="donetodoList">
          {
            this.props.todoList.length !== 0 ? this.props.todoList.map((todo, index) => {
              return <TodoContainer todo={todo} key={index} id={todo.id} deleteTodo={this.props.deleteTodo} />
            }) : <Empty />
          }
        </div>
      </div>
    )
  }
}

export default DoneTodoList;
