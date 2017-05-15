import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="background">
          <div className="panel left profile-photo">
          </div>
          <div className="panel right">
            <div className="title-container">
              <h1 className="title">Hi there! I'm Felix.</h1>
              <p className="intro">What would you like to learn about me?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
