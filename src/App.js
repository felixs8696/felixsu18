import React, { Component } from 'react';
import './App.css';
import { fadeInDown } from 'react-animations';
import Radium from 'radium';
import {StyleRoot} from 'radium';
import { Button } from 'react-materialize';

const styles = {
  fadeInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  },
  fadeInDownDelay: {
    opacity: '0',
    animation: 'x 1s',
    animationDelay: '.65s',
    animationFillMode: 'forwards',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  }
}

function TitlePanel(props) {
  return(
    <div className="title-container">
        <h1 className="title" style={[styles.fadeInDown]}>Hi there! I'm Felix.</h1>
        {/* <p className="intro" style={[styles.fadeInDownDelay]}>What would you like to learn about me?</p> */}
        <div style={[styles.fadeInDownDelay]}><Button waves='light' className='blue'>Click to learn more about me</Button></div>
    </div>
  )
}

function OptionsPanel(props) {
  return(
    <div className="title-container">
        <h1 className="title" style={[styles.fadeInDown]}>Hi there! I'm Felix.</h1>
        <p className="intro" style={[styles.fadeInDownDelay]}>What would you like to learn about me?</p>
        <Button waves='light' className='blue'>Click to learn more about me.</Button>
    </div>
  )
}

var Intro = Radium(TitlePanel)

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <img src="/img/logo.png" className="App-logo" alt="logo" />
          <div className="background">
            <div className="panel right interest-photo">
              <Intro></Intro>
            </div>
            <div className="panel left profile-photo">
            </div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
