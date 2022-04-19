import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@mui/styles";
import classes from './MuiDropdown.module.css';



export const MuiDropdown = ()  => {

    const useStyles = makeStyles(() => ({
    root: {
      "& .MuiAutocomplete-root.css-16awh2u-MuiAutocomplete-root":{margin:"15px 0"}
    },
  }));

  const c = useStyles();
  return (
    <Autocomplete className={c.root}
      multiple
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <div>{option.title}</div>
            <TextField type="text" placeholder="Type Value" />
            <label>to be paid</label>
            <TextField type="number" placeholder="10000" />
            <label>per</label>
            <TextField type="text" placeholder="Day" />
          </Stack>
        </li>
      )}
      renderInput={(params) => (
        <TextField className={classes.traitInput} {...params} placeholder="Type Trait(s)" />
      )}
    />
  );
}


const top100Films = [
  { title: "Background" },
  { title: "Eyes" },
  { title: "Hat" }
];

