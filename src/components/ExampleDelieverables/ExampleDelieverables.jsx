import React from "react";
import classes from "./ExampleDelieverables.module.css";
import { SliderFunc } from "./Slider/slider";
import { HeadComp } from '../ReuseAbleComponents/HeadComp'
import BuildingImg1 from "./building2.png";
import BuildingImg2 from "./building1.png";

export const ExampleDelieverables = () => {
  return (
    <div className={classes.EDSection} id="Example-Deliverables">
      <HeadComp text = 'Example Deliverables'></HeadComp>
      
      <h1>
        Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TrueSketch PLUS)
      </h1>
      <div className={classes.EDVideo}>
        <div className={classes.EDVideo_1}></div>
        <div className={classes.EDVideo_2}></div>
      </div>

      <SliderFunc />

      <h1 className={classes.HeadingUEffect}>TrueSketch PLUS [SKX]</h1>
      <div className={classes.EDVideoS2}>
        <div className={classes.EDVideo_1S2}>
          <img src={BuildingImg1} alt="" />
        </div>
        <div className={classes.EDVideo_2S2}>
          <img src={BuildingImg2} alt="" />
        </div>
      </div>
    </div>
  );
};
