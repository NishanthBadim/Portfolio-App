import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import Label from "../../atoms/_label/_label";
import InputBox from "../../atoms/_input/_input";

const useStyles = makeStyles({
    form: {
        marginTop: "10px",
        padding: "20px 50px 20px 50px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "4px",
    },
    field: {
        marginTop: "10px",
    },
    input: {
        backgroundColor: "#ffffff",
        color: "#000000",
        padding: "5px",
        marginTop: "20px",
    },
    buttonBox: {
        margin: "40px auto 0 auto",
        width: "45%",
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.5), 0 5px 10px 0 rgba(0, 0, 0, 0.5)',
    },
    button: {
        color: "white",
        fontWeight: 'bold',
        fontSize: '16px',
        textTransform: "none",
        width: "100%",
        background: "linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)",
    },
    error: {
        fontSize: '12px',
        color: "red",
        textAlign: "initial",
    },
});

export default function ContactForm() {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [subject, setSubject] = useState("");
    const [subjectError, setSubjectError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        var namePattern = /^[a-zA-Z]+$/;

        if (name === "" || name === null) {
            setNameError("* Name cannot be empty");
        }
        else if (!namePattern.test(name))
            setNameError("* Please provide a valid name");
        else setNameError("");

        var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email === "" || email === null)
            setEmailError("* Email cannot be empty");
        else if (!emailPattern.test(email))
            setEmailError("* Please provide a valid email");
        else setEmailError("");

        if (phone === "" || phone === null)
            setPhoneError("* Phone number cannot be empty");
        else if (isNaN(phone) || phone.length !== 10)
            setPhoneError("* Please provide a valid phone number");
        else setPhoneError("");

        if (subject === "" || subject === null)
            setSubjectError("* Subject cannot be empty");
        else setSubjectError("");

    };

    return (
        <div className={classes.form}>
            <form>
                <div className={classes.field}>
                    <Label text={"Name"} />
                    <InputBox
                        type={"text"}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        placeholder={"Enter your name"}
                    />
                    <Typography className={classes.error}>
                        {nameError !== "" && nameError}
                    </Typography>
                </div>

                <div className={classes.field}>
                    <Label text={"Email"} />
                    <InputBox
                        type={"email"}
                        placeholder={"Enter your email address"}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <Typography data-testid="emailError" className={classes.error}>
                        {emailError !== "" && emailError}
                    </Typography>
                </div>
                <div className={classes.field}>
                    <Label text={"Phone number"} />
                    <InputBox
                        type={"text"}
                        placeholder={"Enter your phone number"}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    />
                    <Typography className={classes.error}>
                        {phoneError !== "" && phoneError}
                    </Typography>
                </div>
                <div className={classes.field}>
                    <Label text={"Subject"} />
                    <InputBox
                        type={"text"}
                        placeholder={"Enter the subject"}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                    />
                    <Typography className={classes.error}>
                        {subjectError !== "" && subjectError}
                    </Typography>
                </div>
                <div className={classes.buttonBox}>
                    <Button className={classes.button} onClick={handleSubmit}>
                        Submit
          </Button>
                </div>
            </form>
        </div>
    );
}
