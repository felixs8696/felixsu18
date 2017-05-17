import React, { Component } from 'react';
import './App.css';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaTerminal from 'react-icons/lib/fa/terminal';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';
import FaCameraRetro from 'react-icons/lib/fa/camera-retro';
import FaMusic from 'react-icons/lib/fa/music';
import { fadeIn, fadeInUp, fadeOutUp, fadeInDown, slideInDown } from 'react-animations';
import Radium from 'radium';
import {StyleRoot} from 'radium';
import { Button } from 'react-materialize';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
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
var AboutPanel = Radium(AboutPanelContent)

function TitlePanelContent(props) {
  return(
    <div className="panel right">
      <div className="center-container center">
          <h1 className="title" style={[styles.fadeInDown]}>Hi there! I'm Felix.</h1>
          <p style={[styles.fadeInDownDelay]}>Hover over or click an icon to learn more about me</p>
      </div>
    </div>
  )
}

function AboutPanelContent(props) {
  return(
    <div className="panel right" style={[styles.fadeIn]}>
      <div className="center-container">
        <div className="about">
          <p>Hey I'm Felix! I am a 3rd year pursuing my <strong>Computer Science</strong> degree at <a href="http://www.berkeley.edu" target="_blank">UC Berkeley</a>. I am a dreamer at heart, builder by nature, and coder by trade. My favorite part of being an engineer is having the ability to react to and solve problems with minimal resources.</p>
          <p>I love to code, but if I don't have my laptop on hand, I am probably shooting hoops, jamming with my friends (sorry neighbors), or going out to meet new people. Ever since we lost fellow student and friend Nick Leslie in the Nice attacks in the summer of 2016, I have been inspired by him to live spontaneously rather than sit still. So, you can expect to find me out and about finding new things to do and people to be around.</p>
          <p>Software development and product management are my main competencies. I have 3 years of software engineering experience in both frontend and backend using web frameworks and databases. After getting a feel for various engineering fields, I have taken up <strong>machine learning</strong>, <strong>artificial intelligence</strong>, and <strong>computer vision</strong> as my main interests. If you want to check out what I have done so far just click the next button below to scroll through my experiences or click for <a href="/resumes/felixsu_resume_sp17.pdf" target="_blank">my resume</a>.</p>
          <p>As I continue my journey, I love talking with and helping out fellow engineers, so please don't hesitate to reach out if you want to chat about ways to move the industry forward and about creating things that will help improve lives.</p>
        </div>
      </div>
    </div>
  )
}

function NavBar(props) {
  return(
    <div className="navbar">
      <Button className="circle white"
              onMouseOver={ () => { props.hoverPanel((<AboutPanel/>)) } }
              onMouseDown={ () => { props.setRightPanel((<AboutPanel/>)) } }
              onMouseLeave={ () => { props.hoverPanel((<TitlePanel/>)) } }
              tabIndex="1">
        <FaHeartO/>
      </Button>
      <Button className="circle white" tabIndex="2"><FaTerminal/></Button>
      <Button className="circle white" tabIndex="3"><FaGraduationCap/></Button>
      <Button className="circle white" tabIndex="4"><FaMusic/></Button>
      <Button className="circle white" tabIndex="5"><FaCameraRetro/></Button>
      <Button className="circle white" tabIndex="6"><FaHeartO/></Button>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.hoverPanel = this.hoverPanel.bind(this);
    this.setRightPanel = this.setRightPanel.bind(this);

    this.state = {
      leftPanel: (<PortraitPanel/>),
      rightPanel: (<TitlePanel/>),
      clicked: false
    };
  }

  hoverPanel(newRightPanel) {
    if (!this.state.clicked) {
      this.setState(prevState => ({
        rightPanel: newRightPanel
      }));
    }
  }

  setRightPanel(newRightPanel) {
    this.setState(prevState => ({
      rightPanel: newRightPanel,
      clicked: true
    }));
  }

  setClicked(bool) {
    this.setState(prevState => ({
      clicked: bool
    }));
  }


  render() {
    return (
      <StyleRoot>
        <div className="App">
          <img src="/img/logo.png" className="App-logo" alt="logo" />
          <div className="background">
            {this.state.leftPanel}
            <NavBar hoverPanel={this.hoverPanel} setRightPanel={this.setRightPanel}/>
            {this.state.rightPanel}
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
