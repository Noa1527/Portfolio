import React from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className='header-socials'>
            <a
                href="https://www.linkedin.com/in/mickaël-raveneau/"
                target='_blank'
            > <BsLinkedin /> </a>
            <a
                href="https://github.com/Noa1527"
                target='_blank'
            > <BsGithub /> </a>
        </div>
    );
};

export default HeaderSocials;
