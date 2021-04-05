import React from 'react';

import './footer.styles.scss';

import sprite from '../../assets/icons/sprite.svg';

const Footer = () => (
    <div className="footer">

        <div className="footer__text">
            <p>All rights reserved.</p>
            <p>Copyright by WANDERLUST Group Ltd 2021</p>
        </div>

        <div className="footer__icon">
            <span className="footer__logo-text">wanderlust</span>
            <div className="footer__socials">
                <svg className="footer__social">
                    <use href={sprite + "#icon-facebook2"}></use>
                </svg>
                <svg className="footer__social">
                    <use href={sprite + "#icon-instagram"}></use>
                </svg>
                <svg className="footer__social">
                    <use href={sprite + "#icon-twitter"}></use>
                </svg>
            </div>
        </div>

        <nav className="footer__links">
            <a href="#" className="footer__link">About Us</a>
            <a href="#" className="footer__link">FAQ's</a>
            <a href="#" className="footer__link">Terms</a>
        </nav>


    </div>
);

export default Footer;