import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root:{
        float:'left'
    }
})
const Label = (props) => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="body2">{props.text}</Typography>
        </div>
    );
}
export default Label;
