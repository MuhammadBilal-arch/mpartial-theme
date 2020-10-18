import React from "react";
import classes from "./Footer.module.css";
export const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div>
        mpartial, a 4D Schematics Company. Copyright 2020 all rights reserved.
      </div>
      <div className= {classes.contactIcon}>
        <a href="/#VideoArea" alt=''>
          <i className="fa fa-facebook fa-1x"></i>
        </a>
        <a href="/#" alt=''>
          <i className="fa fa-twitter fa-1x"></i>
        </a>
        <a href="/#" alt=''>
          <i className="fa fa-google-plus fa-1x"></i>
        </a>
        <a href="/#" alt=''>
          <i className="fa fa-linkedin fa-1x"></i>
        </a>
        <a href="/#" alt=''>
          <i className="fa fa-instagram fa-1x"></i>
        </a>
      </div>
    </div>
  );
};
