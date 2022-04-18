/** @format */

import * as React from "react";
import classes from "./LinearStepper.module.css";
import { Stepper, Step, StepLabel, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BasicConfig } from "../FormSteps/BasicConfig";
import { YieldBonus } from "../FormSteps/YieldBonus";

function getSteps() {
  return [
    "Basic Config",
    "Yield & Bonus Config",
    "Unstake Config",
    "Claim Config",
  ];
}

const UnstakeConfig = () => {
  return <h1>Untake configuration</h1>;
};

const ClaimConfig = () => {
  return <h1>Claim configuration</h1>;
};

function getStepContent(step, formikProps) {
  console.log(formikProps, "formik");
  switch (step) {
    case 0:
      return <BasicConfig formik={formikProps} />;
    case 1:
      return <YieldBonus formik={formikProps} />;
    case 2:
      return <UnstakeConfig />;
    case 3:
      return <ClaimConfig />;
    default:
      return "unknown step";
  }
}

export const LinearStepper = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const useStyles = makeStyles(() => ({
    root: {
      "& .MuiStepIcon-root": { color: "#fff" },
      "& .MuiStepIcon-root.Mui-active": { color: "#FFA908" },
      "& .MuiStepIcon-text": { fill: "#000" },
      "&. MuiSvgIcon-root": { color: "#fff" },
      "& .MuiStepConnector-line": {
        border: "2px dashed #FDAFAF",
        borderTop: "0",
      },
      "& .MuiStepLabel-label.Mui-active": { color: "#FFA908" },
      "& .MuiStepLabel-label": { color: "#fff", fontSize: "20px" },
    },
  }));
  const c = useStyles();
  let arrOfInitialStates = [
    {
      projectName: "",
      url: "",
      primaryColor: "",
      secondaryColor: "",
      TertiaryColor: "",
      quaternaryColor: "",
      address: "",
      ERCtoken: "",
      ERCsymbol: "",
    },
    {
      per:"",
      Holds: "",
      HoldBonus: "",
      LockPeriod: "",
      LockPeriodBonus: "",
      tokenIds: "",
      to: "",
    },
    {
     name:""
    },
    {
     hi:""
    },
  ];

  let arrOfValidationSchema = [
    Yup.object({
      projectName: Yup.string().required("Required"),
      url: Yup.string().required("Required"),
      primaryColor: Yup.string().required("Required"),
      secondaryColor: Yup.string().required("Required"),
      TertiaryColor: Yup.string().required("Required"),
      quaternaryColor: Yup.string().required("Required"),
      address:Yup.string().required("Required"),
      ERCtoken: Yup.number().required("Required"),
      ERCsymbol:Yup.number().required("Required")
    }),Yup.object({
      per: Yup.string().required(),
      tokenIds: Yup.number().required("Required"),
      to:Yup.number().required("Required"),
      Holds: Yup.number().required("Required"),
      HoldBonus: Yup.number().required("Required"),
      LockPeriod: Yup.number().required("Required"),
      LockPeriodBonus: Yup.number().required("Required")
    })
  ];

  console.log(arrOfInitialStates[activeStep], "state", activeStep);
  const formik = useFormik({
    initialValues: arrOfInitialStates[activeStep],
    enableReinitialize: true,
    validationSchema: arrOfValidationSchema[activeStep],
    onSubmit: (values, isSubmitting) => {
      console.log(values, "isSubmitting", isSubmitting);
      console.log(JSON.stringify(values, null, 2));
      const steps = getSteps();
      if (activeStep < steps.length) setActiveStep(activeStep + 1);
    },
  });

  const handleBack = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };
  // const handleNext = () => {
  //   const steps = getSteps();
  //   if (activeStep < steps.length) setActiveStep(activeStep + 1);
  // };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.stepperSection}>
      <Stepper className={c.root} alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Typography variant='h3' align='center'>
            Thank You
          </Typography>
          <Button variant='contained' color='primary' onClick={handleReset}>
            Reset
          </Button>
        </>
      ) : (
        <div className={classes.Formcontainer}>
          <form onSubmit={formik.handleSubmit}>
            {getStepContent(activeStep, formik)}

            <Button
              className={classes.backButton}
              variant='text'
              disabled={activeStep === 0}
              onClick={handleBack}
              type='reset'>
              back
            </Button>
            <Button
              className={classes.nextButton}
              variant='contained'
              color='primary'
              // onClick={handleNext}
              type='submit'>
              Next
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};
