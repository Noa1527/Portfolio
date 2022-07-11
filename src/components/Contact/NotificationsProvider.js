import React from 'react';
import { v4 } from "uuid";
import Notification from './Notification';
const NotificationsProvider = (props) => {
    const notifs = [
        {
            id:v4(),
            type:"SUCCESS",
            message:"Votre méssage à bien été envoyé",
        },
        // {
        //     id:v4(),
        //     type:"ERROR",
        //     message:"Votre méssage n'a pas pu etre envoyé",
        // }
    ];
    console.log(notifs);
    return (
        <div>
            <div className={"notification-wrapper"}>
                {notifs.map(note =>{
                    return <Notification key={note.id} {...note}/>
                })}
            </div>
            {props.children}
        </div>
    );
};

export default NotificationsProvider;