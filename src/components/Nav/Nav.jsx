import React , { useState } from 'react'
import classes from './Nav.module.css'
import Logo from './logo.png'
export const Nav = ({NcolorBG , NtextColor}) => {

    const [openMenu, setopenMenu] = useState(false)
    const OnClickNavButton = () => {
        setopenMenu(openMenu ? false : true);
    }
    return (
        <>
        <nav style={{backgroundColor: NcolorBG }} className={classes.Navbar} >   
         <img src={Logo} alt=''/>
        {
                <ul className = {classes.showUL}>
                     <li><a href='#Ground-Truth-Data' alt='' style={{color: NtextColor}}>Ground-Truth Data</a></li>
                     <li><a href='#How-It-Works' alt='' style={{color: NtextColor}}>How its Works</a></li>
                     <li><a href='#Fee-Structure' alt='' style={{color: NtextColor}}>Fee Structure</a></li>
                     <li><a href='#Example-Deliverables' alt='' style={{color: NtextColor}}>Example Deliverables</a></li>
                     <li><a href='#login' alt='' style={{color: NtextColor}}>Submission Portal</a></li>
                     <li><a href='#Contact-US' alt='' style={{color: NtextColor}}>Contact Us</a></li>
                     <li><button className={classes.Navbutton}>Sign In</button></li>
                 </ul>
        }
        <div className = {classes.navbarmenu} onClick = {OnClickNavButton}>
        <span></span>
        <span></span>
        <span></span>
        </div>        
        </nav>
            <ul className = {openMenu ? classes.showMenu : classes.HideshowMenu}>
                <li><a href='#item-1' alt='' style={{color: "black"}}>Ground-Truth Data</a></li>
                <li><a href='#item-2' alt='' style={{color: "black"}}>How its Works</a></li>
                <li><a href='#item-3' alt='' style={{color: "black"}}>Fee Structure</a></li>
                <li><a href='#item-4' alt='' style={{color: "black"}}>Example Deliverables</a></li>
                <li><a href='#item-5' alt='' style={{color: "black"}}>Submission Portal</a></li>
                <li><a href='#item-2' alt='' style={{color: "black"}}>Contact Us</a></li>
                <li><button className={classes.Navbutton}>Sign In</button></li>
            </ul>
        </>
)
}

