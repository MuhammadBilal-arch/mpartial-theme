import React from 'react'
import classes from './Nav.module.css'
import Logo from './logo.png'
export const Nav = ({NcolorBG , NtextColor}) => {

    return (
        <nav style={{backgroundColor: NcolorBG }} className={classes.Navbar} >   
            {console.log(NcolorBG,NtextColor)}
         <img src={Logo} alt=''/>
         <ul>
            <li><a href='#item-1' alt='' style={{color: NtextColor}}>Ground-Truth Data</a></li>
            <li><a href='#item-2' alt='' style={{color: NtextColor}}>How its Works</a></li>
            <li><a href='#item-3' alt='' style={{color: NtextColor}}>Fee Structure</a></li>
            <li><a href='#item-4' alt='' style={{color: NtextColor}}>Example Deliverables</a></li>
            <li><a href='#item-5' alt='' style={{color: NtextColor}}>Submission Portal</a></li>
            <li><a href='#item-2' alt='' style={{color: NtextColor}}>Contact Us</a></li>
            <li><button className={classes.Navbutton}>Sign In</button></li>
        </ul>         
        </nav>
    )
}
