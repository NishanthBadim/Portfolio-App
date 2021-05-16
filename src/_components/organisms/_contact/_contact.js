import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ContactForm from '../../molecules/_contactForm/_contactForm'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingTop: '1em',
  },

  contactGrid: {
    textAlign: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '550px',
    background: 'white',
    color: 'black',
    marginBottom: '20px'
  },
  h3: {
    fontFamily: "'Anton', sans-serif"
  },
  hr: {
    borderTop: '5px dotted black',
    width: '50%',
    margin: 'auto',
  }
})

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.contactGrid}>
        <Cell col={8}>
          <h3 className={classes.h3}>Share your details and get in touch with me.</h3>
          <hr className={classes.hr}/>
          <div className="contact-list">
            <ContactForm />
          </div>
        </Cell>
      </Grid>
    </div>
  )
}

export default Contact;
