import React from "react";
import classes from "./Form.module.css";

export const Form = () => {
  return (
    <div className={classes.FormSection} id= 'Contact-US'>
      <div className={classes.ChiwHeading}>Contact Us</div>
      <form>
        <div className={classes.FormInputs}>
          <div className={classes.Wrapper}>
            <input type="text" id="name" />
            <label htmlFor="name">Your Name</label>
          </div>

          <div className={classes.Wrapper}>
            <input type="text" id="email" />
            <label htmlFor="email">Email</label>
          </div>

          <div className={classes.Wrapper}>
            <input type="text" id="cell" />
            <label htmlFor="">Cell</label>
          </div>
        </div>
        <div className={classes.FormTextArea}>
          <textarea name="" id="textarea"></textarea>
          <label htmlFor="textarea">Write your message...</label>
        </div>
      </form>
      <button className = {classes.ChiWButton}>Submit</button>
    </div>
  );
};
