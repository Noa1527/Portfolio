import React, { useRef } from 'react';
import './index.scss';
import Modal from '../Modal';
import {
    Books,
    Univers,
    Music,
    Draws,
    Canada,
    Assosiation
} from '../../Helpers/HobbiesData';

const Hobbies = () => {
    const modalRefHobbie = useRef();
    const modalRefAssos = useRef();
    const modalRefLanguage = useRef();

    return (
        <section id='hobbies' className='section-hobbies'>
            <div className="container hobbies-container">
                <div className="module-header">
                    <h2 className='module-title'>
                        Centres d’intérêts
                        <span className='module-sub'>Hobbies</span>
                    </h2>
                    <div className='module-line'></div>
                </div>
                <div className='row'>
                    <div className='col-hobbies'>
                        <div className="box-hobbies" onClick={() => modalRefHobbie.current.open()}>
                            <p className="hobbie">Hobbies</p>
                        </div>
                        <Modal ref={modalRefHobbie}>
                            <div className='text-hobbies'>
                                <ul>
                                    <div className='items-hobbies'>
                                        <div className='readings'>
                                            <li>La Lecture</li>
                                        </div>
                                        <div className='img-hobbies'>
                                            <a href={Books[0].img}>
                                                <img src={Books[0].img} width={100} height={100} alt="Livre" />
                                            </a>
                                            <a href={Books[1].img}>
                                                <img src={Books[1].img} width={100} height={100} alt="Livre" />
                                            </a>
                                            <a href={Books[2].img}>
                                                <img src={Books[2].img} width={100} height={100} alt="Livre" />
                                            </a>
                                            <a href={Books[3].img}>
                                                <img src={Books[3].img} width={100} height={100} alt="Livre" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='items-hobbies'>
                                        <div className='readings'>
                                            <li>La Conquête Spaciale</li>
                                        </div>
                                        <div className='img-hobbies'>
                                            <a href={Univers[0].img}>
                                                <img src={Univers[0].img} width={150} height={100} alt="Starship" />
                                            </a>
                                            <a href={Univers[1].img}>
                                                <img src={Univers[1].img} width={150} height={100} alt="Rover" />
                                            </a>
                                            <a href={Univers[2].img}>
                                                <img src={Univers[2].img} width={150} height={100} alt="SLS" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='items-hobbies'>
                                        <div className='readings'>
                                            <li>La Musique</li>
                                        </div>
                                        <div className='img-hobbies'>
                                            <a href={Music[0].img}>
                                                <img src={Music[0].img} width={100} height={100} alt="Artist" />
                                            </a>
                                            <a href={Music[1].img}>
                                                <img src={Music[1].img} width={100} height={100} alt="Artist" />
                                            </a>
                                            <a href={Music[2].img}>
                                                <img src={Music[2].img} width={100} height={100} alt="Artist" />
                                            </a>
                                            <a href={Music[3].img}>
                                                <img src={Music[3].img} width={100} height={100} alt="Artist" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='items-hobbies'>
                                        <div className='readings'>
                                            <li>Le Dessin</li>
                                        </div>
                                        <div className='img-hobbies'>
                                            <a href={Draws[0].img}>
                                                <img src={Draws[0].img} width={100} height={100} alt="Dessin" />
                                            </a>
                                            <a href={Draws[1].img}>
                                                <img src={Draws[1].img} width={100} height={100} alt="Dessin" />
                                            </a>
                                            <a href={Draws[2].img}>
                                                <img src={Draws[2].img} width={100} height={100} alt="Dessin" />
                                            </a>
                                            <a href={Draws[3].img}>
                                                <img src={Draws[3].img} width={100} height={100} alt="Dessin" />
                                            </a>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </Modal>

                        <div className="box-hobbies" onClick={() => modalRefAssos.current.open()}>
                            <p className="assosiation">
                                Aide aux associations 
                            </p>
                        </div>
                        <Modal ref={modalRefAssos}>
                            <div>
                                <p className="text-canada">
                                    Service à autrui 
                                </p>
                                <div className='border'></div>
                                <div className='canada-img'>
                                    <a href={Assosiation[0].img}>
                                        <img src={Assosiation[0].img} width={250} height={250} alt="" />
                                    </a>
                                    <a href={Assosiation[1].img}>
                                        <img src={Assosiation[1].img} width={250} height={250} alt="" />
                                    </a>
                                </div>
                            </div>
                        </Modal>

                        <div className="box-hobbies" onClick={() => modalRefLanguage.current.open()}>
                            <p className="language">
                                Anglais courant
                            </p>
                        </div>
                        <Modal ref={modalRefLanguage}>
                            <div>
                                <p className="text-canada">
                                    Je suis parti pendant deux ans au Canada
                                </p>
                                <div className='border'></div>
                                <div className='canada-img'>

                                    <a href={Canada[0].img}>
                                        <img src={Canada[0].img} width={195} height={195} alt="Moncton" />
                                        <div class="hover">
                                            <div class="text">
                                                <p>Moncton</p>
                                            </div>
                                        </div>

                                    </a>
                                    <a href={Canada[1].img}>
                                        <img src={Canada[1].img} width={195} height={195} alt="Montague" />
                                        <div class="hover">
                                            <div class="text">
                                                <p>Montague</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href={Canada[2].img}>
                                        <img src={Canada[2].img} width={195} height={195} alt="Summerside" />
                                        <div class="hover">
                                            <div class="text">
                                                <p>Summerside</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href={Canada[3].img}>
                                        <img src={Canada[3].img} width={195} height={195} alt="Bathurst" />
                                        <div class="hover">
                                            <div class="text">
                                                <p>Bathurst</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href={Canada[4].img}>
                                        <img src={Canada[4].img} width={195} height={195} alt="Halifax" />
                                        <div class="hover">
                                            <div class="text">
                                                <p>Halifax</p>
                                            </div>
                                        </div>

                                    </a>
                                    <a href={Canada[5].img}>
                                        <img src={Canada[5].img} width={195} height={195} alt="Lighthouse" />
                                        <div class="hover">
                                            <div class="text">
                                                <p>Lighthouse</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hobbies;