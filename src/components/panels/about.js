import React from 'react';
import Radium from 'radium';
import styles from '../../animations/radium.js';
import '../../styles/panels.css';

var About = Radium(AboutContent);

function AboutContent(props) {
  return(
    <div className="panel right" style={[styles.fadeIn]}>
      <div className="center-container">
        <h3>About Me</h3>
        <div className="about">
          <p>Hey I'm Felix! I am a 3rd year pursuing my <strong>Computer Science</strong> degree at <a href="http://www.berkeley.edu" target="_blank">UC Berkeley</a>. I am a dreamer at heart, builder by nature, and coder by trade. My favorite part of being an engineer is having the ability to react to and solve problems with minimal resources.</p>
          <p>I love to code, but if I don't have my laptop on hand, I am probably shooting hoops, jamming with my friends (sorry neighbors), or going out to meet new people. Ever since we lost fellow student and friend Nick Leslie in the Nice attacks in the summer of 2016, I have been inspired by him to live spontaneously rather than sit still. So, you can expect to find me out and about finding new things to do and people to be around.</p>
          <p>Software development and product management are my main competencies. I have 3 years of software engineering experience in both frontend and backend using web frameworks and databases. After getting a feel for various engineering fields, I have taken up <strong>machine learning</strong>, <strong>artificial intelligence</strong>, and <strong>computer vision</strong> as my main interests. If you want to check out what I have done so far just click the next button below to scroll through my experiences or click for <a href="/resumes/felixsu_resume_fa17.pdf" target="_blank">my resume</a>.</p>
          <p>As I continue my journey, I love talking with and helping out fellow engineers, so please don't hesitate to reach out if you want to chat about ways to move the industry forward and about creating things that will help improve lives.</p>
        </div>
      </div>
    </div>
  )
}

export default About;