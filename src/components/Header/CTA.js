import React from 'react';
import CV from '../../assets/image/CV_De_Monsieur_Raveneau_.pdf'
const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='flat-button'>Télécharger le CV</a>
            <a href='#contact' className='flat-button' >ME CONTACTER</a>
        </div>
    );
};

export default CTA;