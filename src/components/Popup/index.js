import React from 'react';
import './index.scss';
const Popup = (props) => {
    const handleClick = (e) => {
        e.stopPropagation();
    }
    return (props.trigger) ? (
        <div onClick={() => props.setTrigger(false)} className='popup'>
            <div onClick={handleClick} className='popup-inner'>
                {props.children}
            </div>
        </div>
    ) : "";
};

export default Popup;