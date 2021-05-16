import React from 'react';
import { Header, Navigation } from 'react-mdl';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const useStyles = makeStyles({
    root: {
        fontSize: '1.7vw',
        color: 'white'
    },
    head: {
        width: '100%', 
        background: 'linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)'
    }
})
const NavBar = () => {
    const classes = useStyles();
    return (
        <Header transparent className={classes.head} title={<Link style={{ textDecoration: 'none', color: 'white', fontSize: '2vw' }} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link  to="/"><Typography className={classes.root}>Home</Typography></Link>
                <Link  to="/gallery"><Typography className={classes.root}>Gallery</Typography></Link>
                <Link  to="/admin"><Typography className={classes.root}>Admin</Typography></Link>
                <Link  to="/aboutme"><Typography className={classes.root}>About Me</Typography></Link>
                <Link  to="/contact"><Typography className={classes.root}>Contact</Typography></Link>
            </Navigation>
        </Header>
    )
}
export default NavBar;