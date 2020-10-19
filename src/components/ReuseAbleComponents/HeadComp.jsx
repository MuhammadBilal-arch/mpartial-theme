import React from 'react'
import classes from './HeadComp.module.css'
export const HeadComp = ({text}) => {
    return (
        <div className = {classes.hiwHeading}>
            {text}
        </div>
    )
}
