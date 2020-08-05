import React from 'react'
import './todoForm.css';
import gateway from '../../gateway'
import { Input } from 'antd';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  onSubmit = () => {
    gateway.insert({
      text: this.state.text,
      status: "UNDONE"
    }).then((res) => {
      this.props.addTodo(res.data);
    });
    this.setState({ text: '' });
  };

  render() {
    const { Search } = Input;
    return (
      <div>
        <Search
          placeholder="input TODO text"
          enterButton="Insert"
          size="large"
          onChange={this.handleChange}
          value={this.state.text}
          onSearch={this.onSubmit}
        />
      </div>
    )
  }
}

export default TodoForm;
