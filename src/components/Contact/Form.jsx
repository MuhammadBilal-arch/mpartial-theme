import React from "react";
import classes from "./Form.module.css";

export const Form = () => {
  return (
    <div className={classes.FormSection}>
      <div className={classes.ChiwHeading}>Contact Us</div>
      <form>
        <div>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" />

          <label htmlFor="">Cell</label>
          <input type="text" id="cell" />
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  );
};
