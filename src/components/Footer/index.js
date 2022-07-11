import React from 'react';
import './index.scss';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
      
            <footer>
                <a href="#" className='footer-logo'>Mickaël Raveneau</a>

                <ul className='permalinks'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#coordinates">Coordonnées</a></li>
                    <li><a href="#experience">Expérience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#hobbies">Hobbies</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer-socials">
                    <a href="https://www.facebook.com/profile.php?id=100009839855698"><FaFacebookF/></a>
                    <a href="https://www.instagram.com/mickaelraveneau/tagged/?hl=fr"><FaInstagram/></a>
                    <a href="https://twitter.com/Miki97697052"><FaTwitter/></a>
                </div>

                <div className="footer-copyright">
                    <small>&copy;  Mickaël Raveneau Portfolio. Tous droits réservés.</small>
                </div>
            </footer>
        
    );
};

export default Footer;