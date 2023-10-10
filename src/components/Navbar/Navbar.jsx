import React from "react";
import classes from './Navbar.module.css'

function Navbar() {
    return <div className={classes.nav}>
        <div className={classes.item}>
            <a href="/profile">Profile</a><br/>
            <a href="#">Messages</a><br/>
            <a href="#">News</a><br/>
            <a href="#">Music</a><br/>
            <a href="#">Settings</a>
        </div>
    </div>
}

export default Navbar;