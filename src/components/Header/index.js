import React, { useState } from 'react';
import './index.scss';
import AnimatedLetter from '../AnimatedLetter';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import { BsFillCaretDownSquareFill } from 'react-icons/bs';

const Header = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const politeArray = ['B', 'o', 'n', 'j', 'o', 'u', 'r', ',']
    const textArray = ['j', 'e', ' ', 's', 'u', 'i', 's', ' ']
    const nameArray = ['M', 'i', 'c', 'k', 'a', 'ë', 'l', ','];
    const jobArray = ['D', 'é', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'u', 'r', ' ', 'W', 'e', 'b'];

    return (
        <>
            <section id='#' className='picture'>
                <div className='filtre'></div>
                <header className='home-page'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetter
                                className={letterClass}
                                strArray={politeArray}
                                idx={1}
                            />
                            <br />
                            <AnimatedLetter
                                className={letterClass}
                                strArray={textArray}
                                idx={9}
                            />
                            <AnimatedLetter
                                className={letterClass}
                                strArray={nameArray}
                                idx={17}
                            />
                            <br />
                            <AnimatedLetter
                                className={letterClass}
                                strArray={jobArray}
                                idx={26}
                            />
                        </h1>
                        <h2> Apprenti Développeur Web </h2>
                        <CTA />
                        <HeaderSocials />

                        <a href="#contact" className='scroll-down'><BsFillCaretDownSquareFill /></a>
                    </div>
                </header>
            </section>
        </>
    );
};

export default Header;