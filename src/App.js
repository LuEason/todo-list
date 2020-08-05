import React from 'react';
import './App.css';
import AllTodoListContainer from './containers/TodoListContainers/AllTodoListContainer';
import DoneTodoListContainer from './containers/TodoListContainers/DoneTodoListContainer';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={AllTodoListContainer} />
        <Route path="/Done" component={DoneTodoListContainer} />
      </Switch>
    </div>
  );
}

export default App;
