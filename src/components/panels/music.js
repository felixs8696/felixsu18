import React from 'react';
import Radium from 'radium';
import styles from '../../animations/radium.js';
import '../../styles/panels.css';

var Music = Radium(MusicContent);

function MusicContent(props) {
  return(
    <div className="panel right" style={[styles.fadeIn]}>
      <div className="center-container">
        <h3>Musician</h3>
      </div>
    </div>
  )
}

export default Music;