
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import classes from './InputContainer.module.css';

export const InputTags = () => {

    const tagContainer = document.querySelector('.tagContainer');

    const createTags = (label) => {
        const div = document.createElement('div');
        div.setAttribute('class','tag');
        const span = document.createElement('span');
        span.innerHTML = label;
        const closeBtn = document.createElement('i');
        closeBtn.setAttribute('class','material-icon');

        div.appendChild(span);
        div.appendChild(closeBtn);
        return div;
    }
    tagContainer.appendChild(createTags("javascript"));
  return (
    <div className={classes.container}>
       <div className={classes.tagContainer}>
           {/* <div className={classes.tag}>
               <span>JavaScript</span>
               <CloseIcon className={classes.closeIcon} />
           </div>
           <div className={classes.tag}>
               <span>JavaScript</span>
               <CloseIcon className={classes.closeIcon} />
           </div> */}
           <input />
       </div>
    </div>
  )
}
