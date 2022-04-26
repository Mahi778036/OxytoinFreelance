/** @format */
import { useState } from "react";
import classes from "./LinearStepper.module.css";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BasicConfig } from "../FormSteps/BasicConfig";
import { YieldBonus } from "../FormSteps/YieldBonus";
import { UnstakeConfig } from "../FormSteps/UnstakeConfig";
import { ClaimConfig } from "../FormSteps/ClaimConfig";

function getSteps() {
  return [
    "Basic Config",
    "Yield & Bonus Config",
    "Unstake Config",
    "Claim Config",
  ];
}

function getStepContent(
  step,
  formikProps,
  checked2,
  setChecked2,
  checked3,
  setChecked3
) {
  switch (step) {
    case 0:
      return <BasicConfig formik={formikProps} />;
    case 1:
      return <YieldBonus formik={formikProps} />;
    case 2:
      return (
        <UnstakeConfig
          setChecked2={setChecked2}
          checked2={checked2}
          formik={formikProps}
        />
      );
    case 3:
      return <ClaimConfig setChecked3={setChecked3} checked3={checked3} />;
    default:
      return "unknown step";
  }
}

function getButton(step, checked2, checked3) {
  switch (step) {
    case 0:
      return (
        <Button
          className={classes.nextButton}
          variant='contained'
          type='submit'>
          Next
        </Button>
      );
    case 1:
      return (
        <Button
          className={classes.nextButton}
          variant='contained'
          type='submit'>
          Next
        </Button>
      );
    case 2:
      return (
        <>
          {checked2 ? (
            <Button
              className={classes.nextButton}
              variant='contained'
              type='submit'>
              Next
            </Button>
          ) : (
            <Button
              className={classes.nextButton}
              variant='contained'
              disabled
              type='submit'>
              Next
            </Button>
          )}
        </>
      );
    case 3:
      return (
        <>
          {checked3 ? (
            <Button
              className={classes.nextButton}
              variant='contained'
              type='submit'>
              Deploy
            </Button>
          ) : (
            <Button
              className={classes.nextButton}
              variant='contained'
              disabled
              type='submit'>
              Deploy
            </Button>
          )}
        </>
      );
    default:
      return "unknown step";
  }
}

export const LinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const steps = getSteps();

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiStepIcon-root": { color: "#fff" },
      "& .MuiStepIcon-root.Mui-active": { color: "#FFA908" },
      "& .MuiStepIcon-text": {
        fill: "#000",
        fontWeight: "bold",
        fontFamily: "var(--font--Punta)",
      },
      "& .MuiStepIcon-root.Mui-active .MuiStepIcon-text": {
        fill: "#fff",
        fontWeight: "bold",
      },
      "& .MuiStepConnector-line": {
        border: "2px dotted #FDAFAF",
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
      Holds: "",
      HoldBonus: "",
      LockPeriod: "",
      LockPeriodBonus: "",
      tokenIds: "",
      to: "",
    },
    {
      riskBurn: "",
    },
    {
      tokenIds: "",
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
      address: Yup.string().required("Required"),
      ERCtoken: Yup.number().required("Required"),
      ERCsymbol: Yup.number().required("Required"),
    }),
    Yup.object({
      tokenIds: Yup.number().required("Required"),
      to: Yup.number().required("Required"),
      Holds: Yup.number().required("Required"),
      HoldBonus: Yup.number().required("Required"),
      LockPeriod: Yup.number().required("Required"),
      LockPeriodBonus: Yup.number().required("Required"),
    }),
    Yup.object({
      riskBurn: Yup.number().required("Required"),
    }),
  ];

  const formik = useFormik({
    initialValues: arrOfInitialStates[activeStep],
    enableReinitialize: true,
    validationSchema: arrOfValidationSchema[activeStep],
    onSubmit: (values, isSubmitting) => {
      console.log(values, "isSubmitting", isSubmitting);
      console.log(JSON.stringify(values, null, 2));
      const steps = getSteps();
      if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
      else setActiveStep(0)    },
  });

  const handleBack = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  return (
    <div className={classes.stepperSection}>
      <Stepper
        nonLinear
        className={c.root}
        alternativeLabel
        activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <div className={classes.Formcontainer}>
        <form onSubmit={formik.handleSubmit}>
          {getStepContent(
            activeStep,
            formik,
            checked2,
            setChecked2,
            checked3,
            setChecked3
          )}
          <Button
            className={classes.backButton}
            variant='text'
            disabled={activeStep === 0}
            onClick={handleBack}
            type='reset'>
            Back
          </Button>
          {getButton(activeStep, checked2, checked3)}
        </form>
      </div>
    </div>
  );
};
