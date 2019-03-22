import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav className="white" role="navigation">
            <div className="nav-wrapper container">

              <Link to="" id="logo-container" href="#" className="brand-logo">Logo</Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="#">Login</Link>
                </li>
                <li>
                  <Link to="#">Signup</Link>
                </li>
              </ul>

              <ul id="nav-mobile" className="sidenav">
                <li>
                    <Link to="#">Login</Link>
                </li>
                <li>
                    <Link to="#">Signup</Link>
                </li>
              </ul>
              <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
          </nav>
          
        </Router>
      </div>
     
    );

  }
}

export default App;
