import React from 'react';
import Radium from 'radium';
import styles from '../../animations/radium.js';
import '../../styles/panels.css';
import '../../styles/work.css';

var Work = Radium(WorkContent);

var workContents = [
  {
    name: "Amazon",
    logo: "img/companies/amazon.png",
    position: "Software Development Engineer Intern",
    date: "May 2017 - Aug 2017",
    desc: [
      {content: "Worked on machine learning and computer vision in Robotics and Automation"}
    ]
  },
  {
    name: "Hack In",
    logo: "img/companies/hackin.png",
    position: "Founder",
    date: "Jul 2016 - Present",
    desc: [
      {content: "Developed an online assessment platform to vet software devs and freelancers"},
      {content: "Wrote 5000 lines of code with the CTO in 3 weeks using Meteor and MongoDB"},
      {content: "Used APIs such as SendGrid and FileStack to store applicant submissions"},
    ]
  },{
    name: "AKALA",
    logo: "img/companies/akala.png",
    position: "Full Stack Software Engineer Intern",
    date: "Sep 2015 - Jul 2016",
    desc: [
      {content: "Developed a mobile app for virtual college counseling using Meteor"},
      {content: "Reduced server costs on UI/UX by using localStorage as a middleman cache"},
    ]
  },
  {
    name: "Beeyond Inc.",
    logo: "img/companies/beeyond.png",
    position: "Software Engineer Intern - Mobile Applications",
    date: "Jun 2015 - Sep 2015",
    desc: [
      {content: "Developed an API for a mobile app using the Angular MVC and Firebase"},
      {content: "Implemented Mocha-Chai, Protractor.js, and Karma for E2E and unit testing"},
      {content: "Designed a cross-platform front-end infrastructure using Ionic and Cordova"},
    ]
  },
  {
    name: "The Princeton Education Network",
    logo: "img/companies/princetoned.png",
    position: "Web Designer",
    date: "Jun 2015 - Sep 2015",
    desc: [
      {content: "Designed a website that helps kids with standardized testing and college apps"},
      {content: "Increased traffic from ~200 to >3000 in 2 mo., accumulating >13,000 page views"}
    ]
  }
]

function JobsList(props) {
  var divs = [];
  props.jobs.forEach(function (job, i) {
    divs.push(<JobContent key={i} jobName={job.name} jobLogo={job.logo} jobPosition={job.position} jobDate={job.date} jobDesc={job.desc}/>);
  });
  return <div className="jobs-list">{divs}</div>;
}

function JobContent(props) {
  function description(desc) {
    var list = [];
    desc.forEach(function (d, i) {
      list.push(<li key={i}>{d.content}</li>);
    });
    return <ul className="list">{list}</ul>;
  }

  return(
    <div className="job">
      <div className="photo"><img className="job-logo" src={props.jobLogo} alt={props.jobName}/></div>
      <div className="description">
        <div className="job-title">
          <div className="job-name">{props.jobName}</div>
          <div className="job-position">{props.jobPosition}</div>
        </div>
        <div className="job-date">{props.jobDate}</div>
        {description(props.jobDesc)}
      </div>
    </div>
  )
}

function WorkContent() {
  return(
    <div className="panel right" style={[styles.fadeIn]}>
      <div className="container">
        <h3>Worker</h3>
        <JobsList jobs={workContents}/>
      </div>
    </div>
  )
}

export default Work;
