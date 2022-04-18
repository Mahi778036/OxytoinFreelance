import React,{useState} from 'react';
import {Multiselect} from 'multiselect-react-dropdown';
import './MultiSelectDropdow.css';


export const MultiSelectDropdown = () => {
    const styles={
        multiSelectContainer:{
            width:"100%",
            height:"50px",
            backgroundColor:"red"
        },
        searchBox:{
            border:"none",
            fontSize:"100px"
        }
    }
    const data = [{property:"Background",id:1},{property:"Hat",id:2},{property:"Eyes",id:3}];
    const [options] = useState(data);
    console.log(options)
  return (
    <div >
        <Multiselect className={styles.multiSelectContainer} options={options} displayValue="property" label="traits" />
     </div>
  )
};
