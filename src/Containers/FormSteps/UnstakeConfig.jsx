import { useEffect } from 'react';
import { Switch,Stack, InputBase } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import  classes from './FormSteps.module.css';


export const UnstakeConfig = ({formik,checked2,setChecked2}) => {
   const handleChange = () => {
     setChecked2(!checked2);
   }

     useEffect(() => {
    if (Object.keys(formik.errors).length > 0 && formik.isSubmitting) {
      console.log("eroor");
      alert("Please enter the Risk Burn percentage");
    }
  }, [formik.isSubmitting, formik.errors]);


  return (
    <Stack className={classes.UnstakeConfig} direction="column" rowGap="20px">
      <Stack  direction="row" justifyContent="space-between" alignItems="center">
        <h2>Risk at Unstake</h2>
        <Switch onChange={handleChange} checkedIcon={<CheckCircleIcon />} icon={<CheckCircleIcon />} />
        </Stack>
        <Stack direction="row" columnGap="10px" alignItems="center">
        <label>Risk of burn</label>
        <InputBase name="riskBurn" type='number' value={formik.values.riskBurn} onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder='0.00' className={classes.input} />  <strong>%</strong>
       </Stack>
       <p>Risk of ownership transfer</p>
       <Stack direction="row" columnGap="10px" alignItems="center">
        <InputBase disabled  placeholder='10.25' className={classes.input} />  
        <p>% risk of transfer to owners of NFTs with token IDs</p>
        <InputBase disabled placeholder='1000' className={classes.input} /> 
        <label>to</label>
        <InputBase disabled placeholder='1000' className={classes.input} /> 
       </Stack>
    </Stack>
  )
}
