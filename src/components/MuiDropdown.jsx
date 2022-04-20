/** @format */
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@mui/styles";
import classes from "./MuiDropdown.module.css";

export const MuiDropdown = () => {
  const [array, setArray] = useState(top100Films);

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


  console.log(array, "arr");

  return (
    <div>
      <Autocomplete
        onChange={(event, value) => {
          setArray(value);
        }}
        className={c.root}
        multiple
        limitTags={3}
        id='multiple-limit-tags'
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[0], top100Films[1], top100Films[2]]}
        renderInput={(params) => {
          return (
            <div>
              <TextField
                className={classes.traitInput}
                {...params}
                placeholder='Type Trait'
              />
            </div>
          );
        }}
      />
      {array.map((e) => {
        return (
          <div className={classes.dropdownItem}>
            <label>{e.title}</label>
            <Autocomplete
              className={c.root}
              multiple
              limitTags={3}
              id='multiple-limit-tags'
              options={colors}
              getOptionLabel={(option) => option.name}
              defaultValue={[colors[0], colors[1]]}
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
                );
              }}
            />
            <label>to be paid</label>
            <input className={classes.input} type='number' placeholder='1000' />
            <label>per</label>
            <input  className={classes.input} type='text' placeholder='Day' />
          </div>
        );
      })}
    </div>
  );
};

const top100Films = [
  { title: "Background", id: 1 },
  { title: "Hat", id: 2 },
  { title: "Eyes", id: 3 },
];

const colors = [
  {name:"orange",id:1},
  {name:"black",id:2}
]
