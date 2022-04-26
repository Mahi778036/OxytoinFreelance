import React from 'react';
import { Switch,Stack,InputBase } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import  classes from './FormSteps.module.css';
import { Dropdown } from '../../components/Dropdown/Dropdown';


export const ClaimConfig = ({checked3,setChecked3}) => {
    const handleChange = () => {
     setChecked3(!checked3);
   }
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h2>Taxation at claim</h2>
         <Switch onChange={handleChange} checkedIcon={<CheckCircleIcon />} icon={<CheckCircleIcon />} />
      </Stack> 
      <Stack direction="row" spacing={1} alignItems="center">
        <label>for Token Ids</label>
        <InputBase className={classes.input}  variant="outlined" placeholder="10000" />
        <label>to</label>
        <InputBase className={classes.input}  variant="outlined" placeholder="10000" />
        <label>@</label>
        <InputBase className={classes.input}  variant="outlined" placeholder='10.5' />
        <label>% to</label>
        <Dropdown placeholder="Deployer" />
      </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
        <label>for Token Ids</label>
        <InputBase  className={classes.input} placeholder="10000" />
        <label>to</label>
        <InputBase className={classes.input}  placeholder="10000" />
        <label>@</label>
        <InputBase className={classes.input} placeholder='10.5' />
        <label>% to</label>
        <Dropdown placeholder="NFT owners" />
      </Stack>
    </Stack>
  )
}
