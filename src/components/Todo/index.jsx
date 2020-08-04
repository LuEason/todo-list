import React from 'react'
import './todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.todo.status
    }
  }

  handlerDivClick = () => {
    this.setState({status: 'DONE' ? 'UNDONE' : 'DONE'});
    this.props.changeStatus(this.props.index);
  };

  handlerSpanClick = () => {
    this.props.deleteTodo(this.props.index)
  };

  render() {
    return (
      <div>
        <span onClick={this.handlerDivClick} className={this.props.todo.status}>{this.props.todo.text}</span>
        <span onClick={this.handlerSpanClick} className="x">x</span>
      </div>
    )
  }
}

export default Todo;
