/** @format */
import React from "react";
import classes from "./FormSteps.module.css";
import { Button, InputBase } from "@mui/material";
import fileUploadImg from "../../assets/fileUpload.svg";

export const BasicConfig = ({ formik }) => {
  return (
    <div className={classes.basicSection}>
      <InputBase
        placeholder='Project Name'
        name='projectName'
        value={formik.values.projectName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type='text'
        className={[classes.input, classes.fullWidth].join(" ")}></InputBase>
      {formik.errors.projectName && formik.touched.projectName ? (
        <div className={classes.error}>{formik.errors.projectName}</div>
      ) : null}
      <div className={classes.flexContainer}>
        <Button
          endIcon={<img src={fileUploadImg} alt='fileuploadimg' />}
          className={[classes.input, classes.halfWidth, classes.normalBtn].join(
            " "
          )}
          component='label'>
          Project Logo (png)
          <input accept='image/png' type='file' hidden />
        </Button>
        <div className={classes.halfWidth}>
          <InputBase
            placeholder='URL Slug'
            type='text'
            name='url'
            value={formik.values.url}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={[classes.input, classes.fullWidth].join(" ")}
          />
          <br></br>
          {formik.errors.url && formik.touched.url ? (
            <div className={classes.error}>{formik.errors.url}</div>
          ) : null}
        </div>
      </div>
      <Button
        variant='contained'
        endIcon={<img src={fileUploadImg} alt='fileuploadimg' />}
        className={[
          classes.input,
          classes.fullWidth,
          classes.marginM,
          classes.normalBtn,
        ].join(" ")}
        component='label'>
        Upload background image (1920 x1080)
        <input accept='image/*' type='file' hidden />
      </Button>
      <div className={classes.flexContainer}>
        <div className={classes.halfWidth}>
          <InputBase
            placeholder='Primary Color'
            type='text'
            name='primaryColor'
            value={formik.values.primaryColor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={[classes.input, classes.fullWidth].join(" ")}
          />
          {formik.errors.primaryColor && formik.touched.primaryColor ? (
            <div className={classes.error}>{formik.errors.primaryColor}</div>
          ) : null}
        </div>
        <div className={classes.halfWidth}>
          <InputBase
            placeholder='
          Secondary Color'
            type='text'
            name='secondaryColor'
            value={formik.values.secondaryColor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={[classes.input, classes.fullWidth].join(" ")}
          />
          {formik.errors.secondaryColor && formik.touched.secondaryColor ? (
            <div className={classes.error}>{formik.errors.secondaryColor}</div>
          ) : null}
        </div>
      </div>
      <div className={classes.flexContainer}>
        <div className={classes.halfWidth}>
          <InputBase
            placeholder='Tertiary Color'
            type='text'
            name='TertiaryColor'
            value={formik.values.TertiaryColor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={[classes.input, classes.fullWidth].join(" ")}
          />
          {formik.errors.TertiaryColor && formik.touched.TertiaryColor ? (
            <div className={classes.error}>{formik.errors.TertiaryColor}</div>
          ) : null}
        </div>
        <div className={classes.halfWidth}>
          <InputBase
            placeholder='
           Quaternary Color'
            type='text'
            name='quaternaryColor'
            value={formik.values.quaternaryColor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={[classes.input, classes.fullWidth].join(" ")}
          />
          {formik.errors.quaternaryColor && formik.touched.quaternaryColor ? (
            <div className={classes.error}>{formik.errors.quaternaryColor}</div>
          ) : null}
        </div>
      </div>
      <hr></hr>
      <InputBase
        placeholder='Address of ERC-721 contract'
        type='text'
        name='address'
        value={formik.values.addressERC}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={[classes.input, classes.fullWidth].join(" ")}
      />
      {formik.errors.address && formik.touched.address ? (
        <div className={classes.error}>{formik.errors.address}</div>
      ) : null}
      <div className={classes.flexContainer}>
        <div className={classes.halfWidth}>
          <InputBase
            placeholder='Name of your ERC token'
            type='text'
            name='ERCtoken'
            value={formik.values.ERCtoken}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={[classes.input, classes.fullWidth].join(" ")}
          />
          {formik.errors.ERCtoken && formik.touched.ERCtoken ? (
            <div className={classes.error}>{formik.errors.ERCtoken}</div>
          ) : null}
        </div>
        <div className={classes.halfWidth}>
          <InputBase
            placeholder='ERC Symbol'
            type='text'
            name='ERCsymbol'
            value={formik.values.ERCsumbol}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={[classes.input, classes.fullWidth].join(" ")}
          />
          {formik.errors.ERCsymbol && formik.touched.ERCsymbol ? (
            <div className={classes.error}>{formik.errors.ERCsymbol}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
