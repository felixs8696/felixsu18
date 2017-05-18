import React from 'react';
import Radium from 'radium';
import styles from '../../animations/radium.js';
import '../../styles/panels.css';

var Photography = Radium(PhotographyContent);

function PhotographyContent(props) {
  return(
    <div className="panel right" style={[styles.fadeIn]}>
      <div className="center-container">
        <h3>Photography</h3>
      </div>
    </div>
  )
}

export default Photography;