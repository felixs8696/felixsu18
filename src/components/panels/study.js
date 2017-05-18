import React from 'react';
import Radium from 'radium';
import styles from '../../animations/radium.js';
import '../../styles/panels.css';

var Study = Radium(StudyContent);

function StudyContent(props) {
  return(
    <div className="panel right" style={[styles.fadeIn]}>
      <div className="center-container">
        <h3>Bookworm</h3>
      </div>
    </div>
  )
}

export default Study;