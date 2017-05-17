import React from 'react';
import '../App.css';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaTerminal from 'react-icons/lib/fa/terminal';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';
import FaCameraRetro from 'react-icons/lib/fa/camera-retro';
import FaBuildingO from 'react-icons/lib/fa/building-o';
import FaMusic from 'react-icons/lib/fa/music';
import FaBolt from 'react-icons/lib/fa/bolt';
import { About, Code, Music, Photography, Study, Title, Work, Dynamo } from '../components/panels.js';
import { Button } from 'react-materialize';

function NavBar(props) {
  return(
    <div className="navbar">
      <Button className={"circle white " + (props.selected === "about" ? 'selected-circle' : '')}
              onMouseDown={ () => { props.setRightPanel((<About id="about"/>)) } }
              onMouseOver={ () => { props.hoverPanel((<About id="about"/>)) } }
              onMouseLeave={ () => { props.hoverPanel((<Title id="title"/>)) } }
              tooltip="About Me">
        <FaHeartO/>
      </Button>
      <Button className={"circle white " + (props.selected === "work" ? 'selected-circle' : '')}
              onMouseDown={ () => { props.setRightPanel((<Work id="work"/>)) } }
              onMouseOver={ () => { props.hoverPanel((<Work id="work"/>)) } }
              onMouseLeave={ () => { props.hoverPanel((<Title id="title"/>)) } }
              tooltip="Worker">
        <FaBuildingO/>
      </Button>
      <Button className={"circle white " + (props.selected === "code" ? 'selected-circle' : '')}
              onMouseDown={ () => { props.setRightPanel((<Code id="code"/>)) } }
              onMouseOver={ () => { props.hoverPanel((<Code id="code"/>)) } }
              onMouseLeave={ () => { props.hoverPanel((<Title id="title"/>)) } }
              tooltip="Programmer">
        <FaTerminal/>
      </Button>
      <Button className={"circle white " + (props.selected === "dynamo" ? 'selected-circle' : '')}
              onMouseDown={ () => { props.setRightPanel((<Dynamo id="dynamo"/>)) } }
              onMouseOver={ () => { props.hoverPanel((<Dynamo id="dynamo"/>)) } }
              onMouseLeave={ () => { props.hoverPanel((<Title id="title"/>)) } }
              tooltip="Dynamo">
        <FaBolt/>
      </Button>
      <Button className={"circle white " + (props.selected === "study" ? 'selected-circle' : '')}
              onMouseDown={ () => { props.setRightPanel((<Study id="study"/>)) } }
              onMouseOver={ () => { props.hoverPanel((<Study id="study"/>)) } }
              onMouseLeave={ () => { props.hoverPanel((<Title id="title"/>)) } }
              tooltip="Bookworm">
        <FaGraduationCap/>
      </Button>
      <Button className={"circle white " + (props.selected === "music" ? 'selected-circle' : '')}
              onMouseDown={ () => { props.setRightPanel((<Music id="music"/>)) } }
              onMouseOver={ () => { props.hoverPanel((<Music id="mbout"/>)) } }
              onMouseLeave={ () => { props.hoverPanel((<Title id="title"/>)) } }
              tooltip="Musician">
        <FaMusic/>
      </Button>
      <Button className={"circle white " + (props.selected === "photography" ? 'selected-circle' : '')}
              onMouseDown={ () => { props.setRightPanel((<Photography id="photography"/>)) } }
              onMouseOver={ () => { props.hoverPanel((<Photography id="photography"/>)) } }
              onMouseLeave={ () => { props.hoverPanel((<Title id="title"/>)) } }
              tooltip="Photographer">
        <FaCameraRetro/>
      </Button>
    </div>
  )
}

export default NavBar;