import React from 'react';
import Logo from '../logo/logo.component';

import './navbar.styles.scss';

const Navbar = () => {
    return (
        <nav className="nav__container" >
            <Logo />
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="/tours" className="nav__link">PACKAGES</a>
                </li>
                <li className="nav__item">
                    <a href="/about" className="nav__link">ABOUT US</a>
                </li>
                <li className="nav__item">
                    <a href="/faqs" className="nav__link">FAQs</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;