import React from 'react';
import Radium from 'radium';
import styles from '../../animations/radium.js';
import '../../styles/panels.css';

var Work = Radium(WorkContent);

var workContents = [
  {
    name: "Amazon",
    logo: "/companies/amazon.png",
    position: "Software Development Engineer Intern",
    date: "May 2017 - Aug 2017",
    desc: [
      {content: "Worked within the Robotics and Automation Team as a Machine Learning and Computer Vision intern."}
    ]
  },
  {
    name: "Hack In",
    logo: "/companies/hackin.png",
    position: "Founder",
    date: "Jul 2016 - Present",
    desc: [
      {content: "Used Meteor and MongoDB to develop a customized technical assessment platform to vet developers and freelancers"},
      {content: "Wrote 5000 lines of code in 3 weeks with the CTO to ensure all features were operational in our BETA release"},
      {content: "Temporarily using email to store redundant data of applicant submissions in the company account"},
    ]
  },{
    name: "AKALA",
    logo: "/companies/akala.png",
    position: "Full Stack Software Engineer Intern",
    date: "Sep 2015 - Jul 2016",
    desc: [
      {content: "Developed a mobile app for virtual college counseling using Meteor as a full stack framework"},
      {content: "Reduced effects of server calls on UI/UX by using localStorage as a middleman cache"},
    ]
  },
  {
    name: "Beeyond Inc.",
    logo: "/companies/beeyond.png",
    position: "Software Engineer Intern - Mobile Applications",
    date: "Jun 2015 - Sep 2015",
    desc: [
      {content: "Developed an API and Angular MVC structure for a mobile app linked to a Firebase database"},
      {content: "Created a Mocha-Chai framework with Protractor.js for E2E testing and Karma for unit testing"},
      {content: "Designed the front-end infrastructure using Ionic and Cordova for cross-platform integration"},
      {content: "Implemented the authentication flow with database checks and front-end alerts for faulty inputs"},
    ]
  },
  {
    name: "The Princeton Education Network",
    logo: "/companies/princetoned.png",
    position: "Web Designer",
    date: "Jun 2015 - Sep 2015",
    desc: [
      {content: "Designed a new website for SAT, ACT, and college application guidance and increased marketing with SEO"},
      {content: "Increased customers from ~200 to over 3000, collecting more than 4000 visits and 13,000 page views"}
    ]
  }
]

function WorkContent(props) {
  return(
    <div className="panel right" style={[styles.fadeIn]}>
      <div className="center-container">
        <h3>Worker</h3>
      </div>
    </div>
  )
}

export default Work;
