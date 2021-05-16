import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    button: {
        "&:hover": {
            backgroundColor: "#ffffff",
            color: "#000000",
        },
    },
}));

const MyButton = (props) => {
    const classes = useStyles();
    return (
        <Button color={props.color} variant="contained" onClick={props.onClick} className={classes.button}
        >
            {props.value}
        </Button>
    );
}
export default MyButton;