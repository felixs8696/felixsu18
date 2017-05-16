import React, { Component } from 'react';
import './App.css';
import { fadeInUp, fadeOutUp, fadeInDown, slideInDown } from 'react-animations';
import Radium from 'radium';
import {StyleRoot} from 'radium';
import { Button } from 'react-materialize';

const styles = {
  fadeInUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  },
  fadeOutUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOutUp, 'fadeOutUp')
  },
  fadeInDown: {
    opacity: '0',
    animation: 'x 1s',
    animationFillMode: 'forwards',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  },
  fadeInDownSlow: {
    opacity: '0',
    animation: 'x 1.6s',
    animationFillMode: 'forwards',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  },
  fadeInDownDelay: {
    opacity: '0',
    animation: 'x 1s',
    animationDelay: '.65s',
    animationFillMode: 'forwards',
    animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
  },
  slideInDown: {
    animation: 'x 2s',
    animationName: Radium.keyframes(slideInDown, 'slideInDown')
  }
}

// Left Panels
function PortraitPanel(props) { return(<div className="panel left profile-photo"></div>) }

// Right Panels
var TitlePanel = Radium(TitlePanelContent)
var OptionsPanel = Radium(OptionsPanelContent)

function TitlePanelContent(props) {
  return(
    <div className="panel right">
      <div className="title-container">
          <h1 className="title" style={[styles.fadeInDown]}>Hi there! I'm Felix.</h1>
          <div style={[styles.fadeInDownDelay]} onClick={() => { props.changePanel((<PortraitPanel></PortraitPanel>), (<OptionsPanel></OptionsPanel>)) }}>
            <Button waves='light' className='blue'>Click to learn more about me</Button>
          </div>
      </div>
    </div>
  )
}

function OptionsPanelContent(props) {
  return(
    <div className="panel right interest-photo" style={[styles.fadeInDownSlow]}>
      
    </div>
  )
}

class App extends Component {


  constructor(props) {
    super(props);
    this.changePanel = this.changePanel.bind(this);

    this.state = {
      leftPanel: (<PortraitPanel></PortraitPanel>),
      rightPanel: (<TitlePanel changePanel={this.changePanel}></TitlePanel>)
    };
  }

  changePanel(newLeftPanel, newRightPanel) {
    this.setState(prevState => ({
      leftPanel: newLeftPanel,
      rightPanel: newRightPanel
    }));
  }

  render() {
    return (
      <StyleRoot>
        <div className="App">
          <img src="/img/logo.png" className="App-logo" alt="logo" />
          <div className="background">
            {this.state.leftPanel}
            {this.state.rightPanel}
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
