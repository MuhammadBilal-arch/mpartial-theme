import React , { useState } from 'react'
import { Link } from 'react-router-dom';
import classes from './Nav.module.css'
import Logo from './logo.png'
export const Nav = ({NavState}) => {
    const [LoginPage, setLoginPage] = useState(false)
    const [openMenu, setopenMenu] = useState(false)
    const OnClickNavButton = () => {
        setopenMenu(openMenu ? false : true);
    }
    return (
        <>
        <nav className={NavState ? classes.NavbarWhite : classes.Navbar} >   
         <img src={Logo} alt=''/>
        {
            <ul className = {classes.showUL}>
                <li>{LoginPage ? 
                <Link to='/' onClick = {() => setLoginPage(false)}>Ground-Truth Data</Link> :
                <a href='#Ground-Truth-Data' alt='' >Ground-Truth Data</a>}</li>
                <li>{LoginPage ? 
                <Link to='/' onClick = {() => setLoginPage(false)}>How its Works</Link> :
                <a href='#How-It-Works' alt='' >How its Works</a>}</li>
                <li>{LoginPage ? 
                <Link to='/' onClick = {() => setLoginPage(false)}>Fee Structure</Link> :
                <a href='#Fee-Structure' alt='' >Fee Structure</a>}</li>     
                <li>{LoginPage ? 
                <Link to='/' onClick = {() => setLoginPage(false)}>Example Deliverables</Link> :
                <a href='#Example-Deliverables' alt='' >Example Deliverables</a>}</li>
                <li onClick = {() => setLoginPage(true)}><Link to='/login'  >Submission Portal</Link></li>
                <li>{LoginPage ? 
                <Link to='/' onClick = {() => setLoginPage(false)}>Contact Us</Link> :
                <a href='#Contact-US' alt=''>Contact Us</a>}</li>  
                <li onClick = {() => setLoginPage(true)}><Link to='/login' >
                <button className={classes.Navbutton}>Sign In</button></Link></li>
            </ul>
        }
        <div className = {classes.navbarmenu} onClick = {OnClickNavButton}>
        <span></span>
        <span></span>
        <span></span>
        </div>
        <ul className = {openMenu ? classes.showMenu : classes.HideshowMenu}>
        <li>{LoginPage ? <Link to='/' onClick = {() => setLoginPage(false)}>Ground-Truth Data</Link> :<a href='#Ground-Truth-Data' alt='' >Ground-Truth Data</a>}</li>
                <li>{LoginPage ? <Link to='/' onClick = {() => setLoginPage(false)}>How its Works</Link> :<a href='#How-It-Works' alt='' >How its Works</a>}</li>
                <li>{LoginPage ? <Link to='/' onClick = {() => setLoginPage(false)}>Fee Structure</Link> :<a href='#Fee-Structure' alt='' >Fee Structure</a>}</li>     
                <li>{LoginPage ? <Link to='/' onClick = {() => setLoginPage(false)}>Example Deliverables</Link> :<a href='#Example-Deliverables' alt='' >Example Deliverables</a>}</li>
                <li onClick = {() => setLoginPage(true)}><Link to='/login'  >Submission Portal</Link></li>
                <li>{LoginPage ? <Link to='/' onClick = {() => setLoginPage(false)}>Contact Us</Link> :<a href='#Contact-US' alt='' >Contact Us</a>}</li>  
                <li onClick = {() => setLoginPage(true)}><Link to='/login' ><button className={classes.Navbutton}>Sign In</button></Link></li>
            </ul>        
        </nav>
        </>
)
}

