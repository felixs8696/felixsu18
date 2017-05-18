import React, { Component } from 'react';
import './App.css';
import { StyleRoot } from 'radium';
import { DefaultLeft, DefaultRight } from './components/panels.js';
import NavBar from './components/navbar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.hoverPanel = this.hoverPanel.bind(this);
    this.setRightPanel = this.setRightPanel.bind(this);

    this.state = {
      leftPanel: (<DefaultLeft id="portrait"/>),
      rightPanel: (<DefaultRight id="title"/>),
      selected: null
    };
  }

  hoverPanel(newRightPanel) {
    if (this.state.selected === null && this.state.rightPanel.props.id !== newRightPanel.props.id) {
      this.setState(prevState => ({ rightPanel: newRightPanel }));
    }
  }

  setRightPanel(newRightPanel) {
    if (this.state.selected === newRightPanel.props.id && this.state.rightPanel.props.id === newRightPanel.props.id) {
      this.setState(prevState => ({ selected: null }));
    } else {
      this.setState(prevState => ({ rightPanel: newRightPanel, selected: newRightPanel.props.id }));
    }
  }

  render() {
    return (
      <StyleRoot>
        <div id="app">
          <img src="/img/logo.png" className="logo" alt="logo" />
          <div className="background">
            {this.state.leftPanel}
            <NavBar hoverPanel={this.hoverPanel} setRightPanel={this.setRightPanel} selected={this.state.selected}/>
            {this.state.rightPanel}
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
