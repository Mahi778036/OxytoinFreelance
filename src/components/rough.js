/** @format */
import React from "react";
import classes from "./Form.module.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useFormik } from "formik";
import * as Yup from "yup";

const Input = (props) => {
  console.log(props, "props");
  return (
    <div className={classes.inputComponent}>
      {props.label && (
        <label className={classes.traitLabel} htmlFor='input-field'>
          {props.label}
        </label>
      )}
      <input
        className={classes.formInput}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id={props.id}
      />
    </div>
  );
};

const InputContainer = (props) => {
  return (
    <div className={classes.InputContainer}>
      {props.label && (
        <label className={classes.containerLabel} htmlFor='input-field'>
          {props.label}
        </label>
      )}
      <input
        className={classes.ContainerInput}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

const InputItem = (props) => {
  return <div className={classes.inputItem}>{props.item}</div>;
};

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      trait: ["Background", "Eyes", "Hat"],
    },
    validationSchema: Yup.object({
      trait: Yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values.trait);
  return (
    <div className={classes.formSection}>
      <h2>Yield by traits</h2>
      <form onSubmit={formik.handleSubmit}>
        <Accordion
          className={classes.accordion}
          style={{
            background: "none",
            boxShadow: "none",
            borderBottom: "2px solid #FDAFAF",
          }}>
          <AccordionSummary
            className={classes.accordionSummary}
            aria-controls='panel1a-content'
            id='panel1a-header'
            style={{ background: "none" }}>
            {/* <label className={classes.traitLabel} htmlFor='input-field'>
              Select trait(s)
            </label>
            <input
              className={classes.ContainerInput}
              type='text'
              name="trait"
              id="trait"
              placeholder='Type Trait'
              onChange={formik.handleChange}
              value={formik.values.trait}
            /> */}
            <div>
              {formik.values.trait.map((item, i) => (
                <InputItem id={i} item={item} />
              ))}
            </div>
            <Input
              type='text'
              name='trait'
              id='trait'
              placeholder='Type Trait'
              label='Select trait(s)'
              onChange={formik.handleChange}
              value={formik.values.trait}
            />
            <ArrowDropDownIcon
              style={{
                position: "absolute",
                top: "50px",
                right: "20px",
                fontSize: "40px",
              }}
            />
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.backgroundDiv}>
              <InputContainer
                label='Background'
                type='text'
                placeholder='Type Value'
              />
              <InputContainer
                label='to be paid'
                type='number'
                placeholder='10000'
              />
              <InputContainer label='per' type='Day' placeholder='Day' />
              <ArrowDropDownIcon
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "10px",
                  fontSize: "40px",
                }}
              />
            </div>
            <div className={classes.backgroundDiv}>
              <InputContainer
                label='Eyes'
                type='text'
                placeholder='Type Value'
              />
              <InputContainer
                label='to be paid'
                type='number'
                placeholder='10000'
              />
              <InputContainer label='per' type='Day' placeholder='Day' />
              <ArrowDropDownIcon
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "10px",
                  fontSize: "40px",
                }}
              />
            </div>
            <div className={classes.backgroundDiv}>
              <InputContainer
                label='Hat'
                type='text'
                placeholder='Type Value'
              />
              <InputContainer
                label='to be paid'
                type='number'
                placeholder='10000'
              />
              <InputContainer label='per' type='Day' placeholder='Day' />
              <ArrowDropDownIcon
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "10px",
                  fontSize: "40px",
                }}
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <div className={classes.tokenIdSection}>
          <h2>Yield by token IDs</h2>
          <div className={classes.tokenContainer}>
            <InputContainer type='number' placeholder='10000' />
            <InputContainer type='text' label='per' placeholder='Day' />
            <InputContainer
              type='number'
              label='for Token IDs'
              placeholder='10000'
            />
            <InputContainer type='number' label='To' placeholder='10000' />
            <button className={classes.addButton}>+Add Range</button>
          </div>
        </div>
        <div className={classes.bonusSection}>
          <h2>Multi-holder Bonus</h2>
          <div className={classes.tokenContainer}>
            <InputContainer type='number' label='Holds' placeholder='10000' />
            <InputContainer type='number' label='%Bonus' placeholder='99' />
            <button className={classes.addButton}>+Add Range</button>
          </div>
        </div>
        <div className={classes.LockbonusSection}>
          <h2>Lock Bonus</h2>
          <div className={classes.tokenContainer}>
            <InputContainer
              type='number'
              label='Lock period'
              placeholder='10000'
            />
            <InputContainer type='number' label='%Bonus' placeholder='99' />
            <button className={classes.addButton}>+Add Range</button>
          </div>
        </div>
        <button type='submit' className={classes.submitButton}>
          Next
        </button>
      </form>
    </div>
    //  <form>

    //        <Accordion>
    //         <AccordionSummary
    //           expandIcon={<ExpandMoreIcon />}
    //           aria-controls="panel2a-content"
    //           id="panel2a-header"
    //         >
    //           <Typography>Accordion 2</Typography>
    //         </AccordionSummary>
    //         <AccordionDetails>
    //           <Typography>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    //             malesuada lacus ex, sit amet blandit leo lobortis eget.
    //           </Typography>
    //         </AccordionDetails>
    //       </Accordion>
    //       <Accordion disabled>
    //         <AccordionSummary
    //           expandIcon={<ExpandMoreIcon />}
    //           aria-controls="panel3a-content"
    //           id="panel3a-header"
    //         >
    //           <Typography>Disabled Accordion</Typography>
    //         </AccordionSummary>
    //       </Accordion>
    //  </form>
  );
};

<FormProvider {...methods}>
  <form onSubmit={methods.handleSubmit(handleNext)}>
    {getStepContent(activeStep)}

    <Button
      className={classes.button}
      disabled={activeStep === 0}
      onClick={handleBack}>
      back
    </Button>
    {isStepOptional(activeStep) && (
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        onClick={handleSkip}>
        skip
      </Button>
    )}
    <Button
      className={classes.button}
      variant='contained'
      color='primary'
      // onClick={handleNext}
      type='submit'>
      {activeStep === steps.length - 1 ? "Finish" : "Next"}
    </Button>
  </form>
</FormProvider>;
