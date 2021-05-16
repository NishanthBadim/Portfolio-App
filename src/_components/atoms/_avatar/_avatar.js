import React from 'react'
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        borderRadius: '10px',
        height: '30vh',
        maxWidth: '30vw',
        paddingTop: '5em'
    }
})
const Avatar = () => {
    const classes = useStyles()
    return (
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDXh6VSPmGsJQ8SOQP5vdAXibWEJSd1ZXUZA&usqp=CAU"
            alt="avatar"
            className={classes.root}
        />
    )
}
export default Avatar;