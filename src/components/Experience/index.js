import React, { useRef, useState } from 'react';
import './index.scss';
import Adrexo from "../../assets/image/works/adrexo.png"
import Michelin from "../../assets/image/works/michelin.jpg"
import Epitech from "../../assets/image/works/epitech.webp"
import Caloriver from "../../assets/image/works/caloriver.gif"
import BackEnd from './BackEnd';
import FrontEnd from './FrontEnd';
import FullStack from './FullStack';
import Modal from '../Modal';

const Experience = () => {
    const modalRefDegres = useRef();
    const modalRefExperience = useRef();
    const modalRefTraining = useRef();
    const modalRefFrontEnd = useRef();
    const modalRefBackEnd = useRef();
    const modalRefFullStack = useRef();
    
    return (
        <section id='experience' className='section-experience'>
            <div className="container experience-container">
                <div className="module-header">
                    <h2 className='module-title'>
                        Expériences
                        <span className='module-sub'>Compétences</span>
                    </h2>
                    <div className='module-line'></div>
                </div>
                <div className='row'>
                    <div className='col-xp'>
                        <div className='studies'>

                            <div className='box-experiences'onClick={() => modalRefDegres.current.open()}>
                                <p>Diplôme</p>
                            </div>
                            <Modal ref={modalRefDegres}>
                                <article className="degres">
                                    <p><strong>RNCP n°5 = BAC+2</strong>: En préparation d'un titre développeur et intégrateur web à <i>Epitech</i> Nancy</p>
                                    <p><strong>CAP</strong>: Maintenance véhicule automobile</p>
                                </article>
                            </Modal>

                            <div className='box-experiences' onClick={() => modalRefExperience.current.open()}>
                                <p>Expériences professionnelles</p>
                            </div>
                            <Modal ref={modalRefExperience}>
                                <article className="experience">
                                    <div className='work-boxes'>
                                        <img src={Adrexo} width={150} height={150} alt="" />
                                        <p>
                                            <strong>Adrexo</strong>: En charge de 10 secteurs à la ville d'Angers.
                                            Encartage et distribution ;
                                            Encarter mettre ranger toute les publicités en une pile ;
                                            Distribution des publicités, mettre les publicités dans les boîtes aux lettres.
                                        </p>
                                    </div>
                                    <div className='work-boxes'>
                                        <img src={Michelin} width={150} height={150} alt="" />
                                        <p>
                                            <strong>Michelin</strong>: Finisseur, vérificateur finition du pneu à cru avant cuisson
                                            et vérification pour trouver les erreurs.
                                        </p>
                                    </div>
                                    <div className='work-boxes'>
                                        <img src={Caloriver} width={150} height={150} alt="" />
                                        <p>
                                            <strong>Caloriver</strong>: En charge d'une machine ; découpe de verre et
                                            envoi du verre pour l'assemblage du double vitrage.
                                        </p>
                                    </div>
                                </article>
                            </Modal>

                            <div className='box-experiences' onClick={() => modalRefTraining.current.open()}>
                                <p>Formation</p>
                            </div>
                            <Modal ref={modalRefTraining}>
                                <article className="training">
                                    <div className='training-img'>
                                        <img src={Epitech} width={400} height={240} alt="" />
                                    </div>
                                    <p className='training-text'>
                                        Étudiant à Epitech Nancy: Je suis actuellement en formation à la Web@académie d'Epitech à Nancy.
                                        Pendant deux ans, la pédagogie d'Epitech est l'auto-apprentissage par projets. Nous cherchons par nous-même comment utiliser les technologies
                                        et avons des professionels qui répondent à nos questions sans nous donner la réponse.
                                    </p>
                                </article>
                            </Modal>
                        </div>
                        <div className='skills'>

                            <div className='box-skills' onClick={() => modalRefFrontEnd.current.open()}>
                                <p>Front-End</p>
                            </div>
                            <Modal ref={modalRefFrontEnd}>
                                <FrontEnd />
                            </Modal>

                            <div className='box-skills' onClick={() => modalRefBackEnd.current.open()}>
                                <p>Back-End</p>
                            </div>
                            <Modal ref={modalRefBackEnd}>
                                <BackEnd />
                            </Modal>

                            <div className='box-skills' onClick={() => modalRefFullStack.current.open()}>
                                <p>Fullstack</p>
                            </div>
                            <Modal ref={modalRefFullStack}>
                                <FullStack />
                            </Modal>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;