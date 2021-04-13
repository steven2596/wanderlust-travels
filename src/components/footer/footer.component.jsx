import React from 'react';

import { Link } from 'react-router-dom';

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
                <a href="https://www.facebook.com">
                    <svg className="footer__social">
                        <use href={sprite + "#icon-facebook2"}></use>
                    </svg>
                </a>
                <a href="https://www.instagram.com">
                    <svg className="footer__social">
                        <use href={sprite + "#icon-instagram"}></use>
                    </svg>
                </a>
                <a href="https://www.twitter.com">
                    <svg className="footer__social">
                        <use href={sprite + "#icon-twitter"}></use>
                    </svg>
                </a>
            </div>
        </div>

        <nav className="footer__links">
            <a href="/about" className="footer__link">About Us</a>
            <a href="/faqs" className="footer__link">FAQ's</a>
            <a href="#" className="footer__link">Terms</a>
        </nav>


    </div>
);

export default Footer;