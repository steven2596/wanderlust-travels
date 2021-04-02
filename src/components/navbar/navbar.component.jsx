import React from 'react';
import Logo from '../logo/logo.component';

import './navbar.styles.scss';

const Navbar = () => {
    return (
        <nav className="nav__container" >
            <Logo />
            <ul className="nav__list">
                <li className="nav__item">
                    <a href="/tours" className="nav__link">packages</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">contact</a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">about</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;