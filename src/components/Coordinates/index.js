import React from 'react';
import './index.scss';

const Coordinates = () => {
    return (
        <section id='coordinates' className='section-coordinates'>
            <div className="container coordinates-container">
                <div className="module-header">
                    <h2 className='module-title'>
                        d'apprentissage
                        <span className='module-sub'>recherche </span>
                    </h2>
                    <div className='module-line'></div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='box-flex'>
                            <p className="coordinate">
                                <strong>Mickaël Raveneau</strong>
                                <br />
                                <strong>Adresse</strong>:
                                <p>583 rue de Paris</p>
                                <p>54200 Ecrouves</p>
                            </p>
                            <p className="coordinate2">
                                <br />
                                <strong>E-mail</strong>:
                                <p>mickael.raveneau@epitech.eu</p>
                            </p>
                        </div>
                        <p className="search-for">
                            <br />
                            <p>
                                Étudiant à Epitech Nancy<strong>en recherche d’une alternance de 14 mois</strong>à partir du 12 septembre en préparation d'un titre RNCP développeur web.
                                <br />
                                Je souhaite approfondir mes connaissances au sein d'une entreprise.
                                <br />
                                J'aime apprendre,
                                Je suis motivé et connais la rigueur du travail.
                                <br />
                                Je reste à votre disposition pour un échange.
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Coordinates;