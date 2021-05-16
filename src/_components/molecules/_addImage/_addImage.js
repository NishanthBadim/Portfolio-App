import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBox from "../../atoms/_input/_input";
import MyButton from "../../atoms/_button/_button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  addImageBox: {
    backgroundColor: 'white',
    padding: "20px 15px 15px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
    height: "auto",
    maxWidth: "100%",
    width: "30vw",
    margin: '15px auto auto auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)',
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    margin: "auto",
  },
  flexItem: {
    flex: '100%',
    justifyContent: "center",
    alignItems: "center",
    width: "inherit",
    margin: "0 0 10px 0",
  },
  error: {
    color: "red",
    textAlign: "initial",
  },
})

export default function AddImageBox(props) {
  const classes = useStyles();

  return (
    <div className={classes.addImageBox}>
      <div className={classes.flexItem}>
        <Typography variant="h4">Enter Image details</Typography>
      </div>
      <div className={classes.flexItem}>
        <InputBox
          type={"text"}
          placeholder={"Enter URL"}
          required={true}
          onChange={(e) => {
            props.setimageUrl(e.target.value);
          }}
        />
        <Typography className={classes.error}>
          {props.imageUrlError !== "" && props.imageUrlError}
        </Typography>
      </div>
      <div className={classes.flexItem}>
        <InputBox
          type={"text"}
          placeholder={"Enter title"}
          required={true}
          onChange={(e) => {
            props.setimageTitle(e.target.value);
          }}
        />
        <Typography className={classes.error}>
          {props.imageTitleError !== "" && props.imageTitleError}
        </Typography>
      </div>
      <MyButton
        className={classes.btn}
        value={"Add"}
        color="primary"
        onClick={props.handleImageAdd}
      />
    </div>
  );
}
