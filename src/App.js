import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'

import 'materialize-css/dist/css/materialize.min.css'

import Home from './pages/Home'
import Login from './pages/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>          
          <Route exact key="Home" path="/" component={Home}/>
          <Route exact key="Login" path="/login" component={Login}/>
        </HashRouter>
      </div>
     
    );

  }
}

export default App;
