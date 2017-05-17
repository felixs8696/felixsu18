import React, { Component } from 'react';
import './App.css';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaTerminal from 'react-icons/lib/fa/terminal';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';
import FaCameraRetro from 'react-icons/lib/fa/camera-retro';
import FaMusic from 'react-icons/lib/fa/music';
import { StyleRoot } from 'radium';
import { Button } from 'react-materialize';
import { About, Code, Music, Photography, Portrait, Study, Title, Work } from './components/panels.js';

function NavBar(props) {
  return(
    <div className="navbar">
      <Button className={"circle white " + (props.selected === "about" ? 'selected-circle' : '')}
              onMouseDown={ () => { props.setRightPanel((<About id="about"/>)) } }
              onMouseOver={ () => { props.hoverPanel((<About id="about"/>)) } }
              onMouseLeave={ () => { props.hoverPanel((<Title id="title"/>)) } }>
        <FaHeartO/>
      </Button>
      <Button className={"circle white " + (props.selected === "code" ? 'selected-circle' : '')}
              onMouseDown={ () => { props.setRightPanel((<Code id="code"/>)) } }
              onMouseOver={ () => { props.hoverPanel((<Code id="code"/>)) } }
              onMouseLeave={ () => { props.hoverPanel((<Title id="title"/>)) } }>
        <FaTerminal/>
      </Button>
      <Button className={"circle white " + (props.selected === "study" ? 'selected-circle' : '')}
              onMouseDown={ () => { props.setRightPanel((<Study id="study"/>)) } }
              onMouseOver={ () => { props.hoverPanel((<Study id="study"/>)) } }
              onMouseLeave={ () => { props.hoverPanel((<Title id="title"/>)) } }>
        <FaGraduationCap/>
      </Button>
      <Button className={"circle white " + (props.selected === "music" ? 'selected-circle' : '')}
              onMouseDown={ () => { props.setRightPanel((<Music id="music"/>)) } }
              onMouseOver={ () => { props.hoverPanel((<Music id="mbout"/>)) } }
              onMouseLeave={ () => { props.hoverPanel((<Title id="title"/>)) } }>
        <FaMusic/>
      </Button>
      <Button className={"circle white " + (props.selected === "photography" ? 'selected-circle' : '')}
              onMouseDown={ () => { props.setRightPanel((<Photography id="photography"/>)) } }
              onMouseOver={ () => { props.hoverPanel((<Photography id="photography"/>)) } }
              onMouseLeave={ () => { props.hoverPanel((<Title id="title"/>)) } }>
        <FaCameraRetro/>
      </Button>
      <Button className={"circle white " + (props.selected === "work" ? 'selected-circle' : '')}
              onMouseDown={ () => { props.setRightPanel((<Work id="work"/>)) } }
              onMouseOver={ () => { props.hoverPanel((<Work id="work"/>)) } }
              onMouseLeave={ () => { props.hoverPanel((<Title id="title"/>)) } }>
        <FaHeartO/>
      </Button>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.hoverPanel = this.hoverPanel.bind(this);
    this.setRightPanel = this.setRightPanel.bind(this);

    this.state = {
      leftPanel: (<Portrait id="portrait"/>),
      rightPanel: (<Title id="title"/>),
      selected: null
    };
  }

  hoverPanel(newRightPanel) {
    if (this.state.selected === null && this.state.rightPanel.props.id !== newRightPanel.props.id) {
      this.setState(prevState => ({
        rightPanel: newRightPanel
      }));
    }
  }

  setRightPanel(newRightPanel) {
    if (this.state.selected === newRightPanel.props.id && this.state.rightPanel.props.id === newRightPanel.props.id) {
      this.setState(prevState => ({
        rightPanel: (<Title id="title"/>),
        selected: null
      }));
    } else {
      this.setState(prevState => ({
        rightPanel: newRightPanel,
        selected: newRightPanel.props.id
      }));
    }
  }

  render() {
    return (
      <StyleRoot>
        <div className="App">
          <img src="/img/logo.png" className="App-logo" alt="logo" />
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
