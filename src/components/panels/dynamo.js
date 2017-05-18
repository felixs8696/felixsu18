import React from 'react';
import Radium from 'radium';
import styles from '../../animations/radium.js';
import '../../styles/panels.css';

var Dynamo = Radium(DynamoContent);

function DynamoContent(props) {
  return(
    <div className="panel right" style={[styles.fadeIn]}>
      <div className="center-container">
        <h3>Dynamo</h3>
      </div>
    </div>
  )
}

export default Dynamo;