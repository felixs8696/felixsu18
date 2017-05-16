import React, { Component } from 'react';
import './App.css';
import { fadeInDown, slideUp } from 'react-animations';
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
  },
  slideUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideUp, 'slideUp')
  }
}

// Left Panels
function PortraitPanel(props) { return(<div className="panel left profile-photo"></div>) }

// Right Panels
var TitlePanel = Radium(TitlePanelContent)
var OptionsPanel = Radium(OptionsPanelContent)

function TitlePanelContent(props) {
  return(
    <div className="panel right interest-photo">
      <div className="title-container">
          <h1 className="title" style={[styles.fadeInDown]}>Hi there! I'm Felix.</h1>
          <div style={[styles.fadeInDownDelay]}><Button waves='light' className='blue'>Click to learn more about me</Button></div>
      </div>
    </div>
  )
}

function OptionsPanelContent(props) {
  return(
    <div className="panel right">
      <div className="title-container">
          <h1 className="title" style={[styles.fadeInDown]}>Hi there! I'm Felix.</h1>
          <p className="intro" style={[styles.fadeInDownDelay]}>What would you like to learn about me?</p>
          <Button waves='light' className='blue'>Click to learn more about me.</Button>
      </div>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPanel: (<PortraitPanel></PortraitPanel>),
      rightPanel: (<TitlePanel></TitlePanel>)
    };
  }

  render() {
    return (
      <StyleRoot>
        <div className="App">
          <img src="/img/logo.png" className="App-logo" alt="logo" />
          <div className="background">
            {this.leftPanel}
            {this.rightPanel}
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
