import React from 'react';
import './App.css';
import AllTodoListContainer from './containers/TodoListContainers/AllTodoListContainer';
import DoneTodoListContainer from './containers/TodoListContainers/DoneTodoListContainer';
import { HashRouter, Route, Switch, Link } from "react-router-dom";

const Router = () => {
  return (
    <div id="routerDiv">
      <ul>
        <li>
          <Link to="Done">Done TODO</Link>
        </li>
        <li>
          <Link to="/">All TODO</Link>
        </li>
      </ul>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Router />
        <div className="App-header">
          <Switch>
            <Route exact path="/" component={AllTodoListContainer} />
            <Route path="/Done" component={DoneTodoListContainer} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
