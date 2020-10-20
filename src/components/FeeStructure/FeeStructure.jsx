import React , { useState } from "react";
import classes from "./FeeStructure.module.css";
import { HeadComp } from '../ReuseAbleComponents/HeadComp'
import { Tooltip } from './ToolTip/Tooltip'
import { Message } from './Message/Message'
export const FeeStructure = () => {
  const [tip, settip] = useState(false)
  const [marksdata, setdmarks] = useState(0)
  const OnClickToolTip = () => {
    tip ? settip(false) : settip(true);
  }

  const onChangeAmount = (e) => {
    console.log(e.target.value)
    setdmarks(e.target.value);
  }

  return (
    <div className={classes.FeeStructureSection} id="Fee-Structure">
      <HeadComp text = 'Waterfall Fee Structure'/>
      <div className={classes.FeeShow}>
        <Message Amount = {marksdata}/> 
        <input type = 'range' min = '0' max = '1000000' step = '50000' 
        className = {classes.sliderbar}
        onChange = {onChangeAmount}/>
        <ul className = {classes.sliderlabels}>
          <li>$0</li>
          <li>$250,000</li>
          <li>$500,000</li>
          <li>$750,000</li>
          <li>$1M+</li>
        </ul>
        
        <div className={classes.FeeShowdata}>
          <p>
            Drag the slider around based on what you think it will cost to
            repair the property.<br/> Move forward based on the estimated fee
            structure below.
          </p>
          <div className={classes.FeeShowButton}>
            <div className={classes.FeeShowInfo}>
            {tip ? <Tooltip/> : null}
            <div onClick = { () => OnClickToolTip()}>
              <i className="info_popup" aria-describedby="popover-basic">i</i>
            </div>
            </div>
              {console.log(typeof marksdata)}
              {
              marksdata === '100000' ? <h1>7.36%</h1> :
              marksdata === '150000' ? <h1>7.22%</h1> :
              marksdata === '200000' ? <h1>7.08%</h1> :
              marksdata === '250000' ? <h1>6.94%</h1> :
              marksdata === '300000' ? <h1>6.80%</h1> :
              marksdata === '350000' ? <h1>6.66%</h1> :
              marksdata === '400000' ? <h1>6.52%</h1> :
              marksdata === '450000' ? <h1>6.38%</h1> :
              marksdata === '500000' ? <h1>6.24%</h1> :
              marksdata === '550000' ? <h1>6.10%</h1> :
              marksdata === '600000' ? <h1>5.96%</h1> :
              marksdata === '650000' ? <h1>5.82%</h1> :
              marksdata === '700000' ? <h1>5.68%</h1> :
              marksdata === '750000' ? <h1>5.54%</h1> :
              marksdata === '800000' ? <h1>5.40%</h1> :
              marksdata === '850000' ? <h1>5.26%</h1> :
              marksdata === '900000' ? <h1>5.12%</h1> :
              marksdata === '950000' ? <h1>4.98%</h1> :
              marksdata === '1000000' ? <h1>4.70%</h1> :
              <h1>7.50%</h1>
            }              
            <h5>mpartial Fee</h5>
          </div>
          <h3>[$750 Minimum]</h3>
        </div>
      </div>
    </div>
  );
};
