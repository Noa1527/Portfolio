import React, { useEffect, useState } from 'react';

const Notification = (props) => {
    const [exit, setExit] = useState(false);
    const [width, setWidth] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const handleStartTimer = () => {
        const id = setInterval(() => {
            setWidth((prev) => {
                if (prev < 100) {
                    return prev + 0.5
                }
                clearInterval(id)
                return prev
            })
        }, 20)
        setIntervalId(id)
    };
    const handlePauseTimer = () => {
        clearInterval(intervalId)
    }
    const handleCloseNotification = () => {
        handlePauseTimer()
        setExit(true)
        setTimeout = (() => {

        }, 400)
    }
    useEffect(() => {
        if (width === 100) {
            handleCloseNotification()
        }
    }, [width]);
    useEffect(() => {
        handleStartTimer()
    }, []);
    return (
        <div onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} className={`notification-item ${props.type === "SUCCESS" ? "success" : "error"} 
        ${exit ? "exit" : ""}`}>
            <p onClick={() => setExit(true)}>{props.message}</p>
            <div className={"bar"} style={{ width: `${width}%` }} />
        </div>
    );
};

export default Notification;