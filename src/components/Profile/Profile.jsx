import React from "react";
import classes from './Profile.module.css'

function Profile() {
    return <div className={classes.content}>
        <div className={classes.description}>
            <img src="https://s1.1zoom.me/big7/367/Lake_Mountains_Sunrises_433183.jpg" alt=""/>
        </div>
        <div className={classes.logo}>
            <img
                src="https://cdn-brilio-net.akamaized.net/news/2015/09/03/15959/5-logo-brand-yang-produknya-terkenal-mahal-150903d.png"
                alt=""/>
        </div>
        <div>
            My Post
            <div>
                New Post
            </div>
            <div className='item'>
                post 1
            </div>
            <div className='item'>
                post 2
            </div>
        </div>
    </div>
}

export default Profile;