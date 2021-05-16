import React from 'react';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({

  bannerText : {
    backgroundColor: 'black',
    color: 'white',
    opacity: 0.8,
    width: '75%',
    margin: 'auto',
    borderRadius: '10px'
  },
  
  h1 : {
    fontSize: '4vw',
    fontWeight: 'bold',
    color: 'white',
    paddingTop: '20px'
  },
  
  hr: {
    borderTop: '5px dotted white',
    width: '50%',
    margin: 'auto',
  },
  
  p: {
    color: 'white',
    fontSize: '20px',
    padding: '1em',
  },
  
  socialLinks:{
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    margin: 'auto',
  },
    i :{
        color: 'white',
        fontSize: '5vw',
        padding: '8px'
    },
  
})

const Banner = () => {
    const classes=useStyles();
    return (
        <div className={classes.bannerText}>
            <h2 className={classes.h1}>Full Stack Web Developer</h2>

            <hr className={classes.hr}/>

            <p className={classes.p}>HTML/CSS | Bootstrap | JavaScript | React | Spring Boot | MySQL</p>

            <div className={classes.socialLinks}>

                {/* LinkedIn */}
                <a href="https://in.linkedin.com/in/nishanth-badim-13326a177?trk=people-guest_people_search-card" rel="noopener noreferrer" target="_blank">
                <div className={classes.i}><i className="fa fa-linkedin-square" aria-hidden="true" /></div>
                </a>

                {/* Github */}
                <a href="https://github.com/Nishanth-17" rel="noopener noreferrer" target="_blank">
                    <div className={classes.i}><i className="fa fa-github-square" aria-hidden="true" /></div>
                </a>

                <a href="https://twitter.com/Nishanth_17" rel="noopener noreferrer" target="_blank">
                <div className={classes.i}><i className="fa fa-twitter" aria-hidden="true" /></div>
                </a>

                <a href="https://www.instagram.com/_nishanth_17/?hl=en" rel="noopener noreferrer" target="_blank">
                <div className={classes.i}><i className="fa fa-instagram" aria-hidden="true" /></div>
                </a>

                

            </div>
        </div>
    )
}
export default Banner;