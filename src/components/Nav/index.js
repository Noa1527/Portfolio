import React, {useState} from 'react';
import './index.scss';
import { BiHome, BiUserCircle, BiBookBookmark } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';
import { MdWorkOutline, MdOutlineVolunteerActivism } from 'react-icons/md';
import { TiSortAlphabeticallyOutline } from 'react-icons/ti';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }><BiHome /></a>
            <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }><BiUserCircle /></a>
            <a href="#coordinates" onClick={()=> setActiveNav('#coordinates')} className={activeNav === '#coordinates' ? 'active' : '' }><TiSortAlphabeticallyOutline /></a>
            <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : '' }><BiBookBookmark /></a>
            <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : '' }><MdWorkOutline /></a>
            <a href="#hobbies" onClick={()=> setActiveNav('#hobbies')} className={activeNav === '#hobbies' ? 'active' : '' }><MdOutlineVolunteerActivism /></a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : '' }><AiOutlineMessage /></a>
        </nav>
    );
};

export default Nav;