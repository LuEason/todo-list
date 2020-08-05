import React from 'react'
import './todo.css';
import gateway from '../../gateway'
import {Card, Input, Modal, Switch} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.todo.text,
      status: props.todo.status,
      visible: false
    }
  }

  handlerUpdate = () => {
    const newTodo = {
      id: this.props.id,
      text: this.state.text,
      status: this.state.status
    };
    gateway.update(newTodo.id, newTodo).then((res) => {
      if (res.status === 200) {
        this.props.changeStatus(this.props.id, res.data);
        this.setState({
          visible: false,
        });
      }
    })
  };

  handlerDelete = () => {
    gateway.deleteById(this.props.id).then((res) => {
      if (res.status === 200) {
        this.props.deleteTodo(this.props.id)
      }
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
    this.setState({
      status: this.props.todo.status,
    });
    this.setState({
      text: this.props.todo.text,
    });
  };

  onSwitchClick = () => {
    let status = this.state.status === "DONE" ? "UNDONE" : "DONE";
    this.setState({
      status: status,
    });
  };

  onInputChange = (value) => {
    this.setState({
      text: value.target.value,
    });
  };

  render() {
    return (
      <div className="Todo">
        <Card type="inner"
              title={"TODO: " + this.props.todo.id}
              actions={[
                <EditOutlined key="edit" onClick={this.showModal}/>,
                <DeleteOutlined key="delete" onClick={this.handlerDelete}/>
              ]}
        >
          {this.props.todo.text}
        </Card>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handlerUpdate}
          onCancel={this.handleCancel}
        >
          Text: <Input
          style={{width: "300px", marginLeft: "30px"}}
          placeholder="Todo text"
          size="middle"
          value={this.state.text}
          onChange={this.onInputChange}
        />
          <br/>
          <br/>
          Status: <Switch style={{marginLeft: "15px"}}
                          checkedChildren="DONE"
                          unCheckedChildren="UNDONE"
                          checked={this.state.status === "DONE"}
                          onChange={this.onSwitchClick}
        />
        </Modal>
      </div>
    )
  }
}

export default Todo;
