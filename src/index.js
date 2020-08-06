import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Layout, Menu } from 'antd';
import { HashRouter, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">All TODO</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/Done">Done TODO</Link></Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '50px', marginTop: 64, paddingBottom: "0" }}>
          <div className="site-layout-background" style={{ padding: 24 }}>
            <App />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>TODO List @2020 Created by Eason Lu</Footer>
      </Layout>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
