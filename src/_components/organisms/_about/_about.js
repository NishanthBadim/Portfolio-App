import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './../../molecules/_education/_education'
import Experience from './../../molecules/_experience/_experience';
import Skills from '../../molecules/_skills/_skills';
import Intro from '../../molecules/_intro/_intro'
import './../../../App.css'
import Avatar from './../../atoms/_avatar/_avatar'
import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles({
  root:{
  background: '#27221F',
  color: 'white',
  padding: '2em'
  }
})
const About = () => {
  const classes=useStyles()
  return (
    <div>
      <Grid>
        <Cell col={5}>
          <div style={{ textAlign: 'center' }}>
            <Avatar />
          </div>
          <Intro />
        </Cell>
        <Cell className={classes.root} col={7}>
          <h2>Education</h2>
          <Education
            startYear={2016}
            endYear={2020}
            schoolName="Gokaraju Rangaraju Institute of Engineering and Technology"
            schoolDescription="I have pursued my Bachelors of Technology in Computer Science domain. My CGPA at the end semester stands out to be 9.4."
          />
          <hr style={{ borderTop: '3px solid #e22947' }} />

          <h2>Experience</h2>
          <Experience
            startYear={2019}
            endYear={2020}
            jobName="Devops Intern, OPENTEXT"
            jobDescription="This is my first internship and I gained experience on technologies like Continuous Integration / Continuous Deployment, Automation Testing etc. "
          />

          <Experience
            startYear={2020}
            endYear='Present'
            jobName="Full Stack  Web Developer Intern, ZEMOSO TECHNOLOGIES"
            jobDescription="I have learnt a lot many cutting edge technologies like React, Spring Boot etc... over here and I aim to learn many more at this company."
          />
          <hr style={{ borderTop: '3px solid #e22947' }} />
          <h2>Skills</h2>

          <Skills
            skill="HTML/CSS"
            progress={100}
          />

          <Skills
            skill="Javascript"
            progress={90}
          />

          <Skills
            skill="React"
            progress={75}
          />
          <Skills
            skill="Java"
            progress={100}
          />
          <Skills
            skill="Spring Boot"
            progress={90}
          />


        </Cell>
      </Grid>
    </div>
  )
}

export default About;
