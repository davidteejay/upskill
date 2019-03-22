import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'

import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/style.css'

import Home from './pages/Home'
import Login from './pages/Login'
import AddReport from './pages/AddReport'
import Reports from './pages/Reports'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>          
          <Route exact key="Home" path="/" component={Home}/>
          <Route exact key="Login" path="/login" component={Login}/>
          <Route exact key="AddReport" path="/reports/new" component={AddReport} />
          <Route exact key="Reports" path="/reports" component={Reports}/>
        </HashRouter>
      </div>
     
    );

  }
}

export default App;
