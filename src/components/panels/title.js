import React from 'react';
import Radium from 'radium';
import styles from '../../animations/radium.js';
import '../../styles/panels.css';
import { Button, Row, Col } from 'react-materialize';

var Title = Radium(TitleContent);

function TitleContent(props) {
  return(
    <div className="panel right">
      <div className="center-container center">
          <h1 className="title" style={[styles.fadeInDown]}>Hi there! I'm Felix.</h1>
          <p style={[styles.fadeInDownDelay]}>Hover over or click an icon to learn more about me</p>
          <Row>
            <Col s={6} m={6} l={6}>
              <Button waves="red" className="white title-btn right" onClick={() => { window.open("/resumes/felixsu_resume_fa17.pdf") }}>My Resume</Button>
            </Col>
            <Col s={6} m={6} l={6}>
              <Button waves="yellow" className="white title-btn left" onClick={() => { window.open("mailto:admin@felixsu.com?Subject=%5BWebsite%20Visitor%5D") }}>
                Contact Me
              </Button>
            </Col>
          </Row>
      </div>
    </div>
  )
}

export default Title;
