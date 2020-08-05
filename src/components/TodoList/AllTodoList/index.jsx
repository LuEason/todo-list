import React from 'react'
import TodoContainer from '../../../containers/TodoContainer'
import TodoFormContainer from '../../../containers/TodoFormContainer'
import gateway from '../../../gateway'
import './index.css';
import {Col, Empty, Row} from 'antd';

class TodoList extends React.Component {
  componentDidMount() {
    gateway.list().then((res) => {
      this.props.setTodos(res.data);
    })
  }

  render() {
    return (
      <div className="rout">
        <div className="todoList">
          <Row gutter={[16, 24]} style={{width: "100%"}}>
            {
              this.props.todoList.length !== 0
                  ?
                this.props.todoList.map((todo, index) => {
                  return(
                    <Col className="gutter-row" span={6} key={index}>
                      <TodoContainer todo={todo} key={index} id={todo.id} deleteTodo={this.props.deleteTodo} />
                    </Col>
                  )
                })
                :
                <Empty />
            }
          </Row>
        </div>
        <div className="todoForm">
          <TodoFormContainer />
        </div>
      </div>
    )
  }
}

export default TodoList;
