import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import MyButton from "../../atoms/_button/_button";
import InputBox from "../../atoms/_input/_input";

const useStyles = makeStyles({
  box: {
    flex: '25%',
    maxWidth: '100%',
    marginRight: '50px',
    width: '600px',
    padding: '0 4px',
    height: "auto",
    backgroundColor: 'white',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "40px",
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)',
  },
  image: {
      position: 'relative',
    width: "15vw",
    height: "15vw",
    backgroundSize: "cover",
    objectFit: "contain",
    marginTop: "20px",
  },
  text: {
    marginTop: "10px",
    marginBottom: "15px",
    width : "100%",
    marginRight: '20px',
    marginLeft: '25px',
    textAlign: 'center',
  },
  buttons: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginBottom: "1em",
    margin: "0 -1em",
  },
  flexItem: {
    margin: "0 1em",
  },

  editBox: {
    display: "flex",
    padding: "5px",
    justifyContent: "space-around",
    alignItems: "center",
  },
  saveButton: {},
  inputBox: {
    width: "60%",
  },
});
export default function ImageBox(props) {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState(props.img.name);

  const handleEditClick = () => {
    setEdit(true);
  };
  const handleSaveClick = () => {
    console.log("NewName: ", newName);
    props.handleImageEdit(props.img, newName);
    setEdit(false);
  };

  const imgUrl = props.img.url;
  return (
    <div style={props.style} className={classes.box}>
      <div
        className={classes.image}
        style={{ backgroundImage: "URL(" + imgUrl + ")" }}
      ></div>

      <div className={classes.text}>
        <Typography variant="subtitle1">{props.img.name}</Typography>
      </div>

      {!edit && props.isAdmin && (
        <div className={classes.buttons}>
          <div className={classes.flexItem}  >
            <MyButton
              onClick={handleEditClick}
              value={"Edit"}
              color={"primary"}
            />
          </div>
          <div className={classes.flexItem}>
            <MyButton
              onClick={() => props.handleImageDelete(props.img)}
              value={"Delete"}
              color={"secondary"}
              className={classes.flexItem}
            />
          </div>
        </div>
      )} 
      {edit && (
        <div className={classes.editBox}>
          <div className={classes.inputBox}>
            <InputBox
              defaultValue={props.img.name}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
            />
          </div>
          <div className={classes.saveButton}>
            <MyButton
              color={"primary"}
              onClick={handleSaveClick}
              value={"Save"}
            />
          </div>
        </div>
      )}
    </div>
  );
}