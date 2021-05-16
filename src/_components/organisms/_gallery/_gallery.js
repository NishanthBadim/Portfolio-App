import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageBox from "../../molecules/_imageBox/_imageBox";

const useStyles = makeStyles({
  root: {
    overflow:'auto',
    background: "linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)",
    backgroundSize: '100%'
  },
  allImages: {
    display: "flex",
    flexWrap:"wrap",
    justifyContent: 'center',
    alignItems:'center',
    maxWidth: "100%",
    width: '50%',
    margin: "auto",
    padding: "40px",
  },
});

const Gallery = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.allImages}>
        {props.allImages.map((img, key) => (
          <ImageBox key={img.id} img={img} />
        ))}
      </div>
    </div>
  );
}
export default Gallery;