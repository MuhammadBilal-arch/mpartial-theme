import React from 'react'
import classes from './Message.module.css'

export const Message = ({Amount}) => {
    return (
        <div className = {classes.LabelAtTop}>
            ${Amount}<br/>
            Estimate Grand Total
        </div>
    )
}
