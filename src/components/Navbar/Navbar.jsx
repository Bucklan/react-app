import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return <div className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink><br/>
            <NavLink to="/dialogs" activeClassName={classes.activeLink}>Dialogs</NavLink><br/>
            <a href="#">News</a><br/>
            <a href="#">Music</a><br/>
            <a href="#">Settings</a>
        </div>
    </div>
}

export default Navbar;