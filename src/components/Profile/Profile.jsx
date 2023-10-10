import React from "react";
import classes from './Profile.module.css'

function Profile() {
    return <div >
        <div>
            <img src="https://s1.1zoom.me/big7/367/Lake_Mountains_Sunrises_433183.jpg" alt=""/>
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