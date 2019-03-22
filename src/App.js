import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
     
    );

  }
}

export default App;
