import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link ,Redirect} from "react-router-dom"

import Register from "./Component/Register.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


         <Route exact path="/Register" render={() => <Register/>} />

          <p>Click here to go for <Link to="/Register">Register</Link> as well as download form as pdf.</p>
          
      </div>
    );
  }
}

export default App;
