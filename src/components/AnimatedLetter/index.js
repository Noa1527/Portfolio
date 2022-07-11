import React from 'react';
import'./index.scss'
const AnimatedLetter = ({letterClass, strArray, idx}) => {
    return (
        <span>
            {
                strArray.map((char, i)=>(
                    <span key={char + i} className={`${letterClass || "text-animate"} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    );
};

export default AnimatedLetter;