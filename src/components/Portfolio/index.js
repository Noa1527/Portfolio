import React, { useRef, useState } from 'react';
import './index.scss';

import Modal from '../Modal';

import Carousel from "../Carousel";
import { Irc, ModelResponsiveImg, BattleshipImg, VitrineImg } from '../../Helpers/CarouselData';

import { FaReact } from 'react-icons/fa';
import { SiSocketdotio } from 'react-icons/si';
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";



const Portfolio = () => {
    const modalRefIRC = useRef();
    const modalRefResponsive = useRef();
    const modalRefBattleship = useRef();
    const modalRefVitrine = useRef();

    const [currImgIrc, setCurrImgIrc] = useState(0);
    const [currImgResponsive, setCurrImgResponsive] = useState(0);
    const [currImgBattleship, setCurrImgBattleship] = useState(0);
    const [currImgVitrine, setCurrImgVitrine] = useState(0);

    return (
        <section id='portfolio' className='section-coordinates '>
            <div className="container portfolio-container">
                <div className="module-header">
                    <h2 className='module-title'>
                        Mes travaux
                        <span className='module-sub'>Portfolio</span>
                    </h2>
                    <div className='module-line'></div>
                </div>
                <div className='row'>
                    <div className='col-portfolio'>
                        <div className='gallery-my-works'>

                            <div className='all-projects-item' onClick={() => modalRefIRC.current.open()}>
                                <img src={Irc[0].img} alt="project irc" />
                                <div class="hover">
                                    <div class="text">
                                        <h3>IRC</h3>
                                        <h4>Boîte de discussion instantanée avec socket.io</h4>
                                    </div>
                                </div>
                            </div>
                            <Modal ref={modalRefIRC}>
                                <article className='article-popup'>
                                    <div className='header-popup' >
                                        <div className='content'>
                                            <h3>IRC</h3>
                                            <div className='border'></div>
                                        </div>
                                    </div>
                                    <div className='caroussel-popup'>
                                        <Carousel
                                            images={Irc[currImgIrc].img}
                                            setCurrImg={setCurrImgIrc}
                                            currImg={currImgIrc}
                                            imagesSize={Irc}
                                        />
                                    </div>
                                    <div className='info-popup'>
                                        <div className='techno-used'>
                                            <h4>La technologie utilisée</h4>
                                            <div className='border'></div>
                                            <article className='skills-details'>
                                                <ul>
                                                    <li>
                                                        <h5>
                                                            Développement sous
                                                            <abbr title="un framework de NodeJS"> React </abbr>
                                                            <FaReact />
                                                        </h5>
                                                    </li>
                                                    <li>
                                                        <h5>
                                                            Interface logicielle
                                                            <abbr title="une interface réseau, échange de données"> Socket.io </abbr>
                                                            <SiSocketdotio />
                                                        </h5>
                                                    </li>
                                                </ul>
                                            </article>
                                        </div>
                                        <div className='techno-used'>
                                            <h4>Informations sur le projet</h4>
                                            <div className='border'></div>
                                            <article>
                                                <p>Il fallait faire une boîte de discussion en entrant simplement un pseudo et être redirigé vers le Chat </p>
                                            </article>
                                        </div>
                                    </div>
                                    <div className='footer-popup'>
                                        <div className='border'></div>
                                        <a className=' btn' href="https://github.com/Noa1527/irc" target={'_blank'}>Visiter mon github</a>
                                    </div>
                                </article>
                            </Modal>

                            <div className='all-projects-item' onClick={() => modalRefResponsive.current.open()}>
                                <img src={ModelResponsiveImg[0].img} alt="" />
                                <div class="hover">
                                    <div class="text">
                                        <h3>Maquette Responsive</h3>
                                        <h4>Créer une maquette mobile first et responsive</h4>
                                    </div>
                                </div>
                            </div>
                            <Modal ref={modalRefResponsive}>
                                <article className='article-popup'>
                                    <div className='header-popup' >
                                        <div className='content'>
                                            <h3>Maquette Responsive</h3>
                                            <div className='border'></div>
                                        </div>
                                    </div>
                                    <div className='caroussel-popup'>
                                        <Carousel
                                            images={ModelResponsiveImg[currImgResponsive].img}
                                            setCurrImg={setCurrImgResponsive}
                                            currImg={currImgResponsive}
                                            imagesSize={ModelResponsiveImg}
                                        />
                                    </div>
                                    <div className='info-popup'>
                                        <div className='techno-used'>
                                            <h4>La technologie utilisée</h4>
                                            <div className='border'></div>
                                            <article className='skills-details'>
                                                <ul>
                                                    <li>
                                                        <h5>
                                                            Intégration en 
                                                            <abbr title="HyperText Markup Language"> HTML </abbr>
                                                            <AiOutlineHtml5 />
                                                        </h5>
                                                    </li>
                                                    <li>
                                                        <h5>
                                                            Le style en
                                                            <abbr title="Cascading Style Sheets"> CSS </abbr>
                                                            <IoLogoCss3 />
                                                        </h5>
                                                    </li>
                                                    <li>
                                                        <h5>
                                                            Le carrousel en
                                                            <abbr title="une interface reseau, échange de données"> JavaScript </abbr>
                                                            <TbBrandJavascript />
                                                        </h5>
                                                    </li>
                                                </ul>
                                            </article>
                                        </div>
                                        <div className='techno-used'>
                                            <h4>Informations sur le projet</h4>
                                            <div className='border'></div>
                                            <article>
                                                <p>Intégration d'une maquette en html css et ajouter un carrousel en js. Il devait être mobile first et responsive</p>
                                            </article>
                                        </div>
                                    </div>
                                    <div className='footer-popup'>
                                        <div className='border'></div>
                                        <a className=' btn' href="https://62d7ddd12d20e531e08596bc--stellar-chebakia-bcc3db.netlify.app" target={'_blank'}>Voir la maquette</a>
                                    </div>
                                </article>
                            </Modal>

                            <div className='all-projects-item' onClick={() => modalRefBattleship.current.open()}>
                                <img src={BattleshipImg[0].img} alt="" />
                                <div class="hover">
                                    <div class="text">
                                        <h3>Battleship</h3>
                                        <h4>Débogage du code JS pour terminer le jeu</h4>
                                    </div>
                                </div>
                            </div>
                            <Modal ref={modalRefBattleship}>
                                <article className='article-popup'>
                                    <div className='header-popup'>
                                        <div className='content'>
                                            <h3>Battleship</h3>
                                            <div className='border'></div>
                                        </div>
                                    </div>
                                    <div className='caroussel-popup'>
                                        <Carousel
                                            images={BattleshipImg[currImgBattleship].img}
                                            setCurrImg={setCurrImgBattleship}
                                            currImg={currImgBattleship}
                                            imagesSize={BattleshipImg}
                                        />
                                    </div>
                                    <div className='info-popup'>
                                        <div className='techno-used'>
                                            <h4>La technologie utilisée</h4>
                                            <div className='border'></div>
                                            <article className='skills-details'>
                                                <ul>
                                                    <li>
                                                        <h5>
                                                            En
                                                            <abbr title="Un framework de NodeJS"> JavaScript </abbr>
                                                            <TbBrandJavascript />
                                                        </h5>
                                                    </li>
                                                </ul>
                                            </article>
                                        </div>
                                        <div className='techno-used'>
                                            <h4>Informations sur le projet</h4>
                                            <div className='border'></div>
                                            <article>
                                                <p>Il fallait déboguer le code js et continuer la réalisation du jeu </p>
                                            </article>
                                        </div>
                                    </div>
                                    <div className='footer-popup'>
                                        <div className='border'></div>
                                        <a className=' btn' href="https://github.com/Noa1527/irc" target={'_blank'}>Visiter mon github</a>
                                    </div>
                                </article>
                            </Modal>

                            <div className='all-projects-item' onClick={() => modalRefVitrine.current.open()}>
                                <img src={VitrineImg[0].img} alt="" />
                                <div class="hover">
                                    <div class="text">
                                        <h3>Site Vitrine</h3>
                                        <h4>Mon premier site avant la formation à Epitech</h4>
                                    </div>
                                </div>
                            </div>
                            <Modal ref={modalRefVitrine}>
                                <article className='article-popup'>
                                    <div className='header-popup' >
                                        <div className='content'>
                                            <h3>Site Vitrine</h3>
                                            <div className='border'></div>
                                        </div>
                                    </div>
                                    <div className='caroussel-popup'>
                                        <Carousel
                                            images={VitrineImg[currImgVitrine].img}
                                            setCurrImg={setCurrImgVitrine}
                                            currImg={currImgVitrine}
                                            imagesSize={VitrineImg}
                                        />
                                    </div>
                                    <div className='info-popup'>
                                        <div className='techno-used'>
                                            <h4>La technologie utilisée</h4>
                                            <div className='border'></div>
                                            <article className='skills-details'>
                                                <ul>
                                                    <li>
                                                        <h5>
                                                            Intégration
                                                            <abbr title="HyperText Markup Language"> HTML </abbr>
                                                            <AiOutlineHtml5 />
                                                        </h5>
                                                    </li>
                                                    <li>
                                                        <h5>
                                                            Style
                                                            <abbr title="Cascading Style Sheets"> CSS </abbr>
                                                            <IoLogoCss3 />
                                                        </h5>
                                                    </li>
                                                </ul>
                                            </article>
                                        </div>
                                        <div className='techno-used'>
                                            <h4>Informations sur le projet</h4>
                                            <div className='border'></div>
                                            <article>
                                                <p>
                                                    Premier bout de code, 
                                                    premier site, 
                                                    ma petite fierté personnelle. 
                                                    Ce site m'a donné envie de coder
                                                    et d'en faire mon métier,
                                                    fait en html css responsive 
                                                </p>
                                            </article>
                                        </div>
                                    </div>
                                    <div className='footer-popup'>
                                        <div className='border'></div>
                                        <a className=' btn' href="https://marie-dominique-colombani-auteur.netlify.app" target={'_blank'}>Visiter le site</a>
                                    </div>
                                </article>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;