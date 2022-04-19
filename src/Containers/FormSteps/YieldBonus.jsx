/** @format */

import React, { useEffect } from "react";
import classes from "../Stepper/LinearStepper.module.css";


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
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export const YieldBonus = ({ formik }) => {
  useEffect(() => {
     if(Object.keys(formik.errors).length > 0 && formik.isSubmitting){
    console.log("eroor")
    alert("Please fill all the details");
  }
  },[formik.isSubmitting,formik.errors])
 
  return (
    <div>
      <div className={classes.MultiSelectDropdown}>
        <h2>Yield by traits</h2>
        <p>Select Trait(s)</p>
        {/* {multi-select-dropdown} */}
      </div>
      <div className={classes.tokenIdSection}>
        <h2>Yield by token IDs</h2>
        <div className={classes.tokenContainer}>
          <InputContainer type='number' placeholder='10000' />
          <InputContainer
            type='text'
            name='per'
             value={formik.values.per}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
            label='per'
            placeholder='Day'
          />
          <InputContainer
            type='number'
            name='tokenIds'
            value={formik.values.tokenIds}
            label='for Token IDs'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='10000'
          />
          <InputContainer
            type='number'
            name='to'
            value={formik.values.to}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label='To'
            placeholder='10000'
          />
          <button className={classes.addButton}>+Add Range</button>
        </div>
      </div>
      <div className={classes.bonusSection}>
        <h2>Multi-holder Bonus</h2>
        <div className={classes.tokenContainer}>
          <InputContainer
            type='number'
            name='Holds'
            value={formik.values.Holds}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label='Holds'
            placeholder='10000'
          />
          <InputContainer
            type='number'
            name='HoldBonus'
            value={formik.values.HoldBonus}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label='%Bonus'
            placeholder='99'
          />
          <button className={classes.addButton}>+Add Range</button>
        </div>
      </div>
      <div className={classes.LockbonusSection}>
        <h2>Lock Bonus</h2>
        <div className={classes.tokenContainer}>
          <InputContainer
            value={formik.values.LockPeriod}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type='number'
            name='LockPeriod'
            label='Lock period'
            placeholder='10000'
          />
          <InputContainer
            name='LockPeriodBonus'
            value={formik.values.LockPeriodBonus}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type='number'
            label='%Bonus'
            placeholder='99'
          />
          <button className={classes.addButton}>+Add Range</button>
        </div>
      </div>
    </div>
  );
};
