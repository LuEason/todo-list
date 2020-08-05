import React from 'react'
import TodoContainer from '../../../containers/TodoContainer'
import gateway from '../../../gateway'
import {Col, Empty, Row} from 'antd';
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
          <Row gutter={[16, 24]} style={{width: "100%"}}>
            {
              this.props.todoList.length !== 0
                ?
                this.props.todoList.map((todo, index) => {
                  return (
                    <Col className="gutter-row" span={6} key={index}>
                      <TodoContainer todo={todo} key={index} id={todo.id} deleteTodo={this.props.deleteTodo}/>
                    </Col>
                  )
                })
                :
                <Empty/>
            }
          </Row>
        </div>
      </div>
    )
  }
}

export default DoneTodoList;
