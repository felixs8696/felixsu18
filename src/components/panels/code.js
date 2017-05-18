import React from 'react';
import Radium from 'radium';
import styles from '../../animations/radium.js';
import '../../styles/panels.css';

var Code = Radium(CodeContent);

function CodeContent(props) {
  return(
    <div className="panel right" style={[styles.fadeIn]}>
      <div className="center-container">
        <h3>Coder</h3>
      </div>
    </div>
  )
}

export default Code;