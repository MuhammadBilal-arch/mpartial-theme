import React from "react";
import classes from "./ExampleDelieverables.module.css";
import { Carousel } from "antd";
import Page1 from './page1.jpg'
import Page2 from './page2.jpg'
import Page3 from './page3.jpg'

import BuildingImg1 from './building2.png'
import BuildingImg2 from './building1.png'
const contentStyle = {
  height: "500px",
  width: "100%",
  color: "#fff",
  lineHeight: '160px',
  textAlign: 'center',
  background: "#364d79",
};


export const ExampleDelieverables = () => {
  return (
    <div className={classes.EDSection} id="Example-Deliverables">
      <div className={classes.EDhiwHeading}>Example Deliverables</div>
      <h1>
        Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TrueSketch PLUS)
      </h1>
      <div className={classes.EDVideo}>
        <div className={classes.EDVideo_1}></div>
        <div className={classes.EDVideo_2}></div>
      </div>
      <h1 style={{padding:'25px 0px'}}>Immaculate. Impartial. [ESX]</h1>
      <div className = {classes.carousel}>
        <Carousel autoplay dots >
          <div>
                <img  style={contentStyle} src= {Page1} alt=''/>
          </div>
          <div>
                <img style={contentStyle}  src= {Page2} alt=''/>
          </div>
          <div>
              <img style={contentStyle}  src= {Page3} alt=''/>
          </div>
        </Carousel>
      </div>
      <h1 className = {classes.HeadingUEffect}>TrueSketch PLUS [SKX]</h1>
      <div className={classes.EDVideoS2}>
        <div className={classes.EDVideo_1S2}>
          <img src = {BuildingImg1} alt=''/>
        </div>
        <div className={classes.EDVideo_2S2}>
        <img src = {BuildingImg2} alt=''/>
        </div>
      </div>

    </div>
  );
};
