import React from 'react';
import './App.css';
import AllTodoListContainer from './containers/TodoListContainers/AllTodoListContainer';
import DoneTodoListContainer from './containers/TodoListContainers/DoneTodoListContainer';
import {BrowserRouter, Route, Switch} from "react-router-dom";

const Router = () => {
  return (
    <div id="routerDiv">
      <ul>
        <li>
          <a href='/Done'>Done TODO</a>
        </li>
        <li>
          <a href='/All'>All TODO</a>
        </li>
      </ul>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <Router/>
      <div className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/Done" extra component={DoneTodoListContainer}/>
            <Route path="/All" extra component={AllTodoListContainer}/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
