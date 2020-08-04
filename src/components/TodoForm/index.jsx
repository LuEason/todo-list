import React from 'react'

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
    this.props.addTodo(this.state.text);
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
