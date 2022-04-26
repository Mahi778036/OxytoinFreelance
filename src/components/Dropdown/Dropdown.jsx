/** @format */
import React from "react";
import classes from './Dropdown.module.css';


export const Dropdown = (props) => {
  return (
    <div className={classes.dropdown}>
      <label className={classes.dropdownLabel} for='Day'>per</label>
      <select className={classes.dropdownSelect} name='Day' id='Day' placeholder={props.placeholder}>
        <option value="" disabled selected hidden >{props.placeholder}</option>
        <option value='oneDay'>1 day</option>
        <option value='oneWeek'>1 week</option>
        <option value='oneMonth'>1 mon</option>
        <option value='oneYear'>1 year</option>
      </select>
    </div>
  );
};
