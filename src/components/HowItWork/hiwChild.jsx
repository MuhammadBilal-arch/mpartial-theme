import React from "react";
import classes from "./HIW.module.css";

const hiwChild = ({ data }) => {
  return (
    <div className={classes.HiwCardContainer}>
      {data.map((item, index) => {
        return (
          <div key={index} className={classes.HiwCard}>
            <h1>{item.ID}</h1>
            <div>{item.p}</div>
          </div>
        );
      })}
    </div>
  );
};

export default hiwChild;
