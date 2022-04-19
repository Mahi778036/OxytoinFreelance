/** @format */

import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@mui/styles";
import classes from "./MuiDropdown.module.css";

export const MuiDropdown = () => {

    const useStyles = makeStyles(() => ({
    root: {
      "& .MuiAutocomplete-root.css-16awh2u-MuiAutocomplete-root": {
        margin: "auto 0",
      },
      "& .MuiButtonBase-root.MuiChip-root": {
        backgroundColor: "#EAAEB6",
        fontSize: "14px",
        color: "#000",
        fontWeight: "bold",
      },
      "& .MuiAutocomplete-popper": { position: "relative" },
      "& .MuiAutocomplete-hasPopupIcon": { height: "100px" },
      "& .MuiAutocomplete-listbox": { display: "none" },
    },
  }));



  const c = useStyles();


  

  const DropdownItem = (props) => {
    if(props.label){
    return (
      <div className={classes.dropdownItem}>
        <label>{props.label}</label>
        <Autocomplete
          className={c.root}
          multiple
          limitTags={3}
          id='multiple-limit-tags'
          options={colors}
          getOptionLabel={(option) => option.name}
          defaultValue={[colors[0], colors[1], colors[2]]}
          renderInput={(params) => {
            console.log(params.InputProps.startAdornment);
            let arr = params.InputProps.startAdornment;
            console.log(arr, "arrr");
            return (
              <TextField
                className={classes.traitInput}
                {...params}
                placeholder='Type Value'
              />
              /* <Stack>
              {arr.map((element) => {
                  console.log(element)
               return <div><TextField  /></div>;
              })}
            </Stack> */
            );
          }}
        />
        <label>to be paid</label>
        <input type="number" placeholder="1000" />
        <label>per</label>
        <input type="text" placeholder="Day" />
      </div>
    );
  }else{
  return <div></div>
}
}

  return (
    <Autocomplete
      className={c.root}
      multiple
      limitTags={3}
      id='multiple-limit-tags'
      options={top100Films}
      getOptionLabel={(option) => option.title}
      defaultValue={[top100Films[0], top100Films[1], top100Films[2]]}
      renderInput={(params) => {
        console.log(params.InputProps.startAdornment);
        let arr = params.InputProps.startAdornment;
        console.log(arr, "arrr");
        return (
          <div>
            <TextField
              className={classes.traitInput}
              {...params}
              placeholder='Type Trait'
            />
            {/* <Stack>
              {arr.map((element) => {
                console.log(element);
                return (
                  <div className={classes.traits}>
                <DropdownItem label={element.props.label} />
                </div>
                );
              })}
            </Stack> */}
          </div>
        );
      }}
    />
  );
};

const top100Films = [
  { title: "Background", year: 2009 },
  { title: "Hat", year: 2000 },
  { title: "Eyes", year: 2009 },
];
const colors = [{ name: "orange" }, { name: "red" }, { name: "black" }];

