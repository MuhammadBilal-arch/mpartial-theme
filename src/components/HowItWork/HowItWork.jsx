import React, { useState } from "react";
import classes from "./HIW.module.css";
import HiwChild from "./hiwChild"; 
import { HeadComp } from '../ReuseAbleComponents/HeadComp'
export const HowItWork = () => {
  const [text] = useState([
    {
      ID: 1,
      p:
        "Perform pre-mitigation and post-mitigation scans with a Matterport Pro Series camera.",
    },
    {
      ID: 2,
      p:
        "Submit the Matterport scans via the mpartial portal and then go back to what you do great.",
    },
    {
      ID: 3,
      p:
        "Receive a well-formatted, fully documented Xactimate PDF, ESX & Matterport TrueSketch PLUS SKX",
    },
  ]);
  return (
    <div className={classes.HowItWorkSection} id='How-It-Works'>
      <HeadComp  text = 'How it Works'></HeadComp>
      <HiwChild data={text} />
      <button className={classes.hiWButton}>Get Started</button>
    </div>
  );
};
