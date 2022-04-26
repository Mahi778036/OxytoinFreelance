/** @format */
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@mui/styles";
import classes from "./MuiDropdown.module.css";
import { InputContainer } from "../InputContainer/InputContainer";
import { Dropdown } from "../Dropdown/Dropdown";


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


  return (
    <div>
      <Autocomplete
        className={c.root}
        onChange={(event, value) => {
          setArray(value);
        }}
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
      {array.map((e, i) => {
        return (
          <div key={i} className={classes.dropdownItem}>
            <label>{e.title}</label>
            <Autocomplete
              className={[c.root, classes.autocomplete].join(" ")}
              disableClearable
              freeSolo={false}
              popupIcon={""}
              multiple
              limitTags={3}
              id='multiple-limit-tags'
              options={colors}
              getOptionLabel={(option) => option.name}
              defaultValue={[colors[0], colors[1]]}
              renderInput={(params) => {
                return (
                  <TextField
                    className={classes.traitInput}
                    {...params}
                    placeholder='Type Value'
                  />
                );
              }}
            />
            <InputContainer
              label='is to be paid'
              placeholder='1000'
              type='number'
            />
            <Dropdown placeholder="Day" />
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
  { name: "orange", id: 1 },
  { name: "black", id: 2 },
];
