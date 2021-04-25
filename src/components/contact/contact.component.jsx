import React from 'react';

import './contact.styles.scss';

import Fade from 'react-reveal/Fade';

import contact from '../../assets/images/contact.jpg';

const Contact = () => (
    <div className="contact">
        <Fade bottom duration={1000} distance="5rem">
            <div className="contact__img">
                <img src={contact} alt="contact-image" className="contact__picture" />
            </div>
        </Fade>
        <Fade bottom duration={1000} distance="5rem">
            <div className="contact__content">
                <div className="contact__line"></div>
                <h3 className="contact__header">Dream it, Visit it</h3>
                <p className="contact__text">
                    Pick up your phone or drop us an email using
                    this address. We are always ready to plan your next trip.
            </p>
                <div className="contact__info">
                    <span className="contact__phone">Phone:</span>
                    <ul className="contact__phone-list">
                        <li className="contact__phone-number">+95 9230 522 633</li>
                        <li className="contact__phone-number">+95 9230 522 634</li>
                        <li className="contact__phone-number">+95 9230 522 635</li>
                    </ul>
                    <span className="contact__email">Email:</span>
                    <span className="contact__email-text">info@wanderlust.travels</span>
                </div>
            </div>
        </Fade>
    </div>
)

export default Contact;