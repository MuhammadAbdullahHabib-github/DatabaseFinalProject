import React, { useState } from 'react';
import StudentForm from '../studentForm/StudentForm';
import StudentFormTwo from '../studentFormTwo/studentFormTwo';
import StudentFormThree from '../studentFormThree/studentFormThree';
import FormHeading from '../FormHeading/FormHeading';
import ReviewForm from '../ReviewForm/ReviewForm';
import "./stepper.css";


import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';





const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        gridArea: "main",
        marginRight: "auto",
        marginLeft: "auto",
        backgroundColor: "none"

    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "10%",
        marginRight: "13.6%"
    },
    button: {
        color: "#fff",
        backgroundColor: "#2EC771",
        height: "3vh",
        width: "4vw",
        marginRight: "5px",
        border: "none",
        borderRadius: "5px"
    },
    buttonback: {
        height: "3vh",
        width: "4vw",
        marginRight: "5px",
        border: "none",
    },
    paragraph: {
        marginTop: "20%",
        marginBottom: "32%",
        textAlign: "center",
        color: "#2EC771",
        fontSize: "1.2vw",
        fontFamily: "Poppins"
    }
}));

function getSteps() {
    return ['About yourself', 'Project topi', 'Skills', 'Review'];
}


function getStepContent(stepIndex, setStep, setformValues, formValues) {
    switch (stepIndex) {
        case 0:
            return <StudentForm submit={setStep} prevValues={formValues} setformValues={setformValues} />;
        case 1:
            return <StudentFormTwo submit={setStep} prevValues={formValues} setformValues={setformValues} />;
        case 2:
            return <StudentFormThree submit={setStep} prevValues={formValues} setformValues={setformValues} />;
        case 3:
            return <ReviewForm submit={setStep} values={formValues} />;
        default:
            return 'Unknown stepIndex';
    }
}

const StepperFun = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [formValues, setformValues] = useState({})
    const steps = getSteps();

    return (
        <>
            <div className={classes.root}>
                <FormHeading />
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <p className={classes.paragraph}>Your form has been successfully submitted<br />We will contact you soon</p>
                        </div>
                    ) : (
                        <div>
                            {getStepContent(activeStep, setActiveStep, setformValues, formValues)}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default StepperFun
