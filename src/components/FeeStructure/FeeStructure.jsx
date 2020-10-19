import React from "react";
import classes from "./FeeStructure.module.css";
import { HeadComp } from '../ReuseAbleComponents/HeadComp'
import { Slider, Tooltip } from "antd";

const marks = {
  0: "$0",
  25: "$250,000",
  50: "$500,000",
  75: "$750,000",
  100: {
    label: <strong>$1M</strong>,
  },
};

export const FeeStructure = () => {
  return (
    <div className={classes.FeeStructureSection} id="Fee-Structure">
      <HeadComp text = 'Waterfall Fee Structure'/>
      <div className={classes.FeeShow}>
        <Slider marks={marks} defaultValue={0} />
        <div className={classes.FeeShowdata}>
          <p>
            Drag the slider around based on what you think it will cost to
            repair the property.<br/> Move forward based on the estimated fee
            structure below.
          </p>
          <div className={classes.FeeShowButton}>
            <div className={classes.FeeShowInfo}>
            <Tooltip
              placement="topLeft"
              // color="white"
              title="Fee Structure Example: An estimate grand total of $100k will result in a fee of $7,360. The $750 deposit will be collected upon submission and applied toward the overarching fee"
            >
              <i className="info_popup" aria-describedby="popover-basic">
                i
              </i>
            </Tooltip>
            </div>
            <h1>7.50%</h1>
            <h5>mpartial Fee</h5>
          </div>
          <h3>[$750 Minimum]</h3>
        </div>
      </div>
    </div>
  );
};
