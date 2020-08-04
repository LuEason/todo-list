import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Home = () => {

};

const BasicRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
      </Switch>
    </BrowserRouter>
  )
};

export default BasicRoute;
