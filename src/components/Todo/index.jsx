import React from 'react'
import './todo.css';
import gateway from '../../gateway'
import { Card } from 'antd';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.todo.status
    }
  }

  handlerDivClick = () => {
    const newTodo = this.props.todo;
    newTodo.status = newTodo.status === 'DONE' ? 'UNDONE' : 'DONE';
    gateway.update(newTodo.id, newTodo).then((res) => {
      if (res.status === 200) {
        this.setState({ status: 'DONE' ? 'UNDONE' : 'DONE' });
        this.props.changeStatus(this.props.id);
      }
    })
  };

  handlerSpanClick = () => {
    gateway.deleteById(this.props.id).then((res) => {
      if (res.status === 200) {
        this.props.deleteTodo(this.props.id)
      }
    });
  };

  render() {
    return (
      <div className="Todo">
        <Card type="inner" title={"TODO: " + this.props.todo.id} extra={<span onClick={this.handlerSpanClick} className="delete">Delete</span>}>
          {this.props.todo.text}
        </Card>
      </div>
    )
  }
}

export default Todo;
