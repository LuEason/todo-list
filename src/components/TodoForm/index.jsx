import React from 'react'
import './todoForm.css';
import gateway from '../../gateway'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({text: event.target.value});
  };

  onSubmit = () => {
    gateway.insert({
      text: this.state.text,
      status: "UNDONE"
    }).then((res) => {
      this.props.addTodo(res.data);
    });
    this.setState({text: ''});
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.text}/>
        <input type="submit" onClick={this.onSubmit}/>
      </div>
    )
  }
}

export default TodoForm;
