import React from 'react';
import './index.scss';

const About = () => {
    

    return (
        <section id='about' className='section-about'>
            <div className="container about-container">
                <div className="module-header">
                    <h2 className='module-title'>
                        Présentation
                        <span className='module-sub'>qui suis-je ?</span>
                    </h2>
                    <div className='module-line'></div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p className="presentation">
                            <strong><i>Développeur passionné </i></strong>
                            depuis ma reconversion professionnelle ;
                            <br />
                            ayant toujours aimé l'informatique, mais n'ayant pas eu le courage de m'y initier pour cause de ma dyslexie.
                            <br />
                            Je veux me prouver à moi-même que j'en suis capable et que je peux aller loin en tant que
                            <i><strong> développeur</strong></i>.
                        </p>
                        <p className="temper">
                            <br />
                            <strong>Honnête</strong>
                            <strong>Travailleur</strong>
                            <strong>Persévérant</strong>
                            <strong>Jovial</strong>
                        </p>
                        <p className="quote">
                            « L'abandon n'est pas une option, persévérer c'est la règle de la réussite »
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;