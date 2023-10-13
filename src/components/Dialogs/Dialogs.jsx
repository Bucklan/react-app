import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                <div className={classes.dialog+ ' ' + classes.active}>
                    FNdjskfd
                </div>
                <div className={classes.dialog+ ' ' + classes.active}>
                    fjdsfds
                </div>
                <div className={classes.dialog+ ' ' + classes.active}>
                    fjkdshfds
                </div>
                <div className={classes.dialog+ ' ' + classes.active}>
                    fjdshkfjd
                </div>
                <div className={classes.dialog+ ' ' + classes.active}>
                    qweqwewq ewqew
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>how are you</div>
                <div className={classes.message}>i'm fine,thanks!and you</div>
            </div>
        </div>
    )
}
export default Dialogs;