import React from "react";
import classes from './VideoSection.module.css'
import videoSrc from '../../video/homepage.mp4'
export const VideoSection = () => {
  return (
    <div className= {classes.VideoSection}>
      <video autoPlay playsInline loop muted className={classes.VideoContainer}>
        <source src={videoSrc} type="video/mp4"></source>
      </video>
      <div className={classes.videotextcontainer}>
        <div className={classes.videotext}>
          Impartial, Remote, 3rd-Party, Estimating Engine
        </div>
      </div>
      <div className={classes.Mouse}></div>
    </div>
  );
};
