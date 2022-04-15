/** @format */
import * as React from "react";
import classes from "./LinearStepper.module.css";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useFormik } from "formik";
import * as Yup from "yup";




function getSteps() {
  return [
    "Basic Config",
    "Yield & Bonus Config",
    "Unstake Config",
    "Claim Config",
  ];
}

const BasicConfig = ({ formik }) => {
  return (
    <div className={classes.basicSection}>
      {/* <input className={[classes.input,classes.fullWidth].join(" ")} placeholder="Project Name" type="text" /> */}
      <TextField 
        placeholder='Project Name'
        name='projectName'
        value={formik.values.projectName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type='text'
        className={[classes.input, classes.fullWidth,classes.marginM].join(" ")}
      />
      <Stack
        direction={{ xs: "row", sm: "row" }}
        spacing={{ xs: 2, sm: 2, md: 2 }}
        justifyContent='space-between'>
          <Button
          endIcon={<FileUploadIcon />}
        className={[classes.input, classes.halfWidth,classes.normalBtn].join(" ")}
        component='label'>
        Project Logo (png)
        <input  accept='image/png' type='file' hidden />
      </Button>
        <TextField
          placeholder='URL Slug'
          type='text'
          name='url'
          value={formik.values.url}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={[classes.input, classes.halfWidth,classes.marginM].join(" ")}
        />
      </Stack>
      <Button
        variant="text"
        endIcon={<FileUploadIcon />}
        className={[classes.input, classes.fullWidth,classes.marginM,classes.normalBtn].join(" ")}
        component='label'>
        Upload background image (1920 x1080)
        <input  accept='image/*' type='file' hidden />
      </Button>
      <Stack style={{margin:"0"}}
        direction={{ xs: "row", sm: "row" }}
        spacing={{ xs: 2, sm: 2, md: 2 }}
        justifyContent='space-between'>
        <TextField
          placeholder='Primary Color'
          type='text'
          name='primaryColor'
          value={formik.values.primaryColor}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={[classes.input, classes.halfWidth, classes.marginM].join(" ")}
        />
        <TextField
          placeholder='
          Secondary Color'
          type='text'
          name='secondaryColor'
          value={formik.values.secondaryColor}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={[classes.input, classes.halfWidth,classes.marginM ].join(" ")}
        />
      </Stack>
       <Stack
        direction={{ xs: "row", sm: "row" }}
        spacing={{ xs: 2, sm: 2, md: 2 }}
        justifyContent='space-between'>
        <TextField
          placeholder='Tertiary Color'
          type='text'
          name='tertiaryColor'
          value={formik.values.tertiaryColor}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={[classes.input, classes.halfWidth].join(" ")}
        />
        <TextField
          placeholder='
          Quaternary Color'
          type='text'
          name='quaternaryColor'
          value={formik.values.quaternaryColor}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={[classes.input, classes.halfWidth].join(" ")}
        />
      </Stack>
      <hr></hr>
      <TextField
          placeholder='Address of ERC-721 contract'
          type='text'
          name='addressERC'
          value={formik.values.addressERC}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={[classes.input, classes.fullWidth].join(" ")}
        />
           <Stack
        direction={{ xs: "row", sm: "row" }}
        spacing={{ xs: 2, sm: 2, md: 2 }}
        justifyContent='space-between'>
        <TextField
          placeholder='Name of your ERC token'
          type='text'
          name='ERCtoken'
          value={formik.values.ERCtoken}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={[classes.input, classes.halfWidth, classes.marginM].join(" ")}
        />
        <TextField
          placeholder='ERC Symbol'
          type='text'
          name='ERCsymbol'
          value={formik.values.ERCsumbol}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={[classes.input, classes.halfWidth].join(" ")}
        />
      </Stack>
    </div>
  );
};

const YieldBonus = () => {
  return <h1>Yield configuration</h1>;
};

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
      return <YieldBonus />;
    case 2:
      return <UnstakeConfig />;
    case 3:
      return <ClaimConfig />;
    default:
      return "unknown step";
  }
}

export const LinearStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const useStyles = makeStyles(() => ({
    root: {
      "& .MuiStepIcon-active": { color: "#FFA908" },
      "& .MuiStepIcon-completed": { color: "#FFA908" },
      "& .Mui-disabled .MuiStepIcon-root": { color: "#FFA908" }
    }
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
      primaryColor: "",
      secondaryColor: "",
      // TertiaryColor: "",
      // quaternaryColor: "",
      // address: "",
      // nameERCtoken: "",
      // ERCsymbol: "",
    },
  ];

  let arrOfValidationSchema = [
    Yup.object({
      projectName: Yup.string().required(),
      url: Yup.string().required(),
    }),
  ];

  console.log(arrOfInitialStates[activeStep],"state",activeStep)
  const formik = useFormik({
    initialValues: arrOfInitialStates[activeStep],
    enableReinitialize: true,
    validationSchema: arrOfValidationSchema[activeStep],
    onSubmit: (values,isSubmitting) => {
      console.log(values,"isSubmitting",isSubmitting);
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
             className={classes.nextButton}
              variant='text'
              disabled={activeStep === 0}
              onClick={handleBack} type="reset">
                
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
