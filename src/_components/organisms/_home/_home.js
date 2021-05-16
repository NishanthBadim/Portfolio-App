import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from './../../atoms/_avatar/_avatar'
import Banner from './../../molecules/_banner/_banner'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)',
        textAlign: 'center',
        position: 'fixed',
        overflow: 'scroll',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        margin: 'auto'
    }
})

const Home = () => {
    const classes = useStyles();
    return (
            <Grid className={classes.root}>
                <Cell col={12}>
                    <Avatar />
                    <Banner />
                </Cell>
            </Grid>
    )
}


export default Home;
