import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/style.css'

import Home from './pages/Home'
import Login from './pages/Login'
import AddReport from './pages/AddReport'
import Reports from './pages/Reports'
import Signup from './pages/Signup';
import Ngo from './pages/Ngo'
import User from './pages/User'
import Report from './pages/Report'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter> 
          <Switch>
            <Route exact key="Home" path="/" component={Home}/>
            <Route exact key="Login" path="/login" component={Login}/>
            <Route exact key="AddReport" path="/new" component={AddReport} />
            <Route exact key="Reports" path="/reports" component={Reports}/>
            <Route exact key="signup" path="/signup" component={Signup}/>
            <Route exact key="user" path="/signup/user" component={User} />
            <Route exact key="ngo" path="/signup/ngo" component={Ngo} />
            <Route exact key="Home" path="/" component={Home}/>
            <Route exact key="Category" path="/sector/:category" component={Reports}/>
            <Route exact key="Tags" path="/reports/:tag" component={Reports} />
            <Route exact key="Report" path="/report/:slug" component={Report}/>
          </Switch>
        </HashRouter>
      </div>
     
    );

  }
}

export default App;
