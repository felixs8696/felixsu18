import React from 'react';
import '../App.css';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaTerminal from 'react-icons/lib/fa/terminal';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';
import FaCameraRetro from 'react-icons/lib/fa/camera-retro';
import FaMusic from 'react-icons/lib/fa/music';
import { About, Code, Music, Photography, Study, Title, Work } from '../components/panels.js';
import { Button } from 'react-materialize';

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

export default NavBar;