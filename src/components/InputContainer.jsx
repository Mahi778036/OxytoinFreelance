import React from "react";
import classes from "../Containers/Stepper/LinearStepper.module.css";

export const InputContainer = (props) => {
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