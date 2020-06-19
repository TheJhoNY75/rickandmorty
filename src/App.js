import React from 'react';
import {Button} from 'antd';
import {Layout} from 'antd';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MenuTop from './components/MenuTop'
// Paginas
import Home from './pages/Home';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Register from './pages/Register';
import Error404 from './pages/Error404';


export default function App() {
  const {Header, Content} = Layout;
  return (
    <Layout>
      <Router>
        <Header>
          <MenuTop />
        </Header>
        <Content>
          <Switch>
            <Route path='/' exact={true}>
              <Home></Home>
            </Route>
            <Route path='/characters' exact={true}>
              <Characters/>
            </Route>
            <Route path='/episodes' exact={true}>
              <Episodes/>
            </Route>
            <Route path='/register' exact={true}>
              <Register/>
            </Route>
            <Route path='*'>
              <Error404 />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}


