import React , { useState } from 'react'
import { Link } from 'react-router-dom';
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
                     <li><Link to='/login'  style={{color: NtextColor}}>Submission Portal</Link></li>
                     <li><a href='#Contact-US' alt='' style={{color: NtextColor}}>Contact Us</a></li>
                     <li><button className={classes.Navbutton}>Sign In</button></li>
                 </ul>
        }
        <div className = {classes.navbarmenu} onClick = {OnClickNavButton}>
        <span></span>
        <span></span>
        <span></span>
        </div>
        <ul className = {openMenu ? classes.showMenu : classes.HideshowMenu}>
                     <li><a href='#Ground-Truth-Data' alt='' >Ground-Truth Data</a></li>
                     <li><a href='#How-It-Works' alt='' >How its Works</a></li>
                     <li><a href='#Fee-Structure' alt='' >Fee Structure</a></li>
                     <li><a href='#Example-Deliverables' alt='' >Example Deliverables</a></li>
                     <li><a href='#login' alt='' >Submission Portal</a></li>
                     <li><a href='#Contact-US' alt=''>Contact Us</a></li>
                     <li><button className={classes.Navbutton}>Sign In</button></li>
            </ul>        
        </nav>
        </>
)
}

