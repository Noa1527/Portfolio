import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { RiMessengerLine } from 'react-icons/ri';
import './index.scss';

const Contact = () => {
    const form = useRef();
    // useEffect(() => {
    //     // Met à jour le titre du document via l’API du navigateur
    //     document.title = `Vous avez bien envoyez votre mail`;
    // });
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a80akfa', 'template_m5uds1x', form.current, 'XSBlhKXCnZAIMfLxl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
            <section id='contact'>
                <div className="container ">
                    <div className="module-header">
                        <h2 className='module-title'>
                            Démarrons un projet ensemble
                            <span className='module-sub'>contact</span>
                        </h2>
                        <div className='module-line'></div>
                    </div>
                    <div className=" contact-container">
                        <div className="contact-options">
                            <article className="contact-option">
                                <HiOutlineMail className='contact-option-icons' />
                                <h4>Email</h4>
                                <h5>mickael.raveneau@epitech.eu</h5>
                                <a href="mailto:mickael.raveneau@epitech.eu" target={'_blank'}>Envoyer un message</a>
                            </article>
                            <article className="contact-option">
                                <RiMessengerLine className='contact-option-icons' />
                                <h4>Messenger</h4>
                                <h5>Mickaël Raveneau</h5>
                                <a href="https://m.me/100009839855698" target={'_blank'}>Envoyer un message</a>
                            </article>
                            <article className="contact-option">
                                <BsWhatsapp className='contact-option-icons' />
                                <h4>WhatsApp</h4>
                                <h5>0769373565</h5>
                                <a href="https://api.whatsapp.com/send?phone=0769373565" target={'_blank'}>Envoyer un message</a>
                            </article>
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder='Votre Nom et Prénom' required />
                            <input type="email" name="email" placeholder='Votre Email' required />
                            <textarea name="message" rows="7" placeholder='Votre Message' required></textarea>
                            <button type="submit" className='btn btn-primary'>Envoyez </button>
                            {/* Votre Message */}
                        </form>

                    </div>
                </div>
            </section>
    );
};

export default Contact;