import React from "react";
import classes from "./login.module.css";
export const login = () => {
  return (
    <div className={classes.LoginPage}>
      <h1>Sign In with your mpartial account.</h1>
      <form>
        <div className={classes.Wrapper}>
          <input type="text" id="email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className={classes.Wrapper}>
          <input type="text" id="password" />
          <label htmlFor="email">Password</label>
        </div>
      </form>
      <button className={classes.LhiWButton}>Sign In</button>
      <h5>New to mpartial?</h5>
      <button className={classes.CLhiWButton}>Create Account</button>
    </div>
  );
};
