import React from 'react';
import ReactDom from 'react-dom';
import './navbutton.styles.scss';

const NavButton = () => {


    return ReactDom.createPortal(
        <div className="navigation" >
            <input id="navi-button" type="checkbox" class="navbutton__checkbox" />
            <label for="navi-button" className="navbutton__container">
                <span className="navbutton__icon" />
            </label>
            <div className="navbutton__background"></div>
            <div className="navbutton__overlay">
                <ul className="navbutton__menu">
                    <li className="navbutton__item">
                        <a href="/" className="navbutton__link">HOME</a>
                    </li>
                    <li className="navbutton__item">
                        <a href="/tours" className="navbutton__link">PACKAGES</a>
                    </li>
                    <li className="navbutton__item">
                        <a href="/about" className="navbutton__link">ABOUT US</a>
                    </li>
                    <li className="navbutton__item">
                        <a href="/faqs" className="navbutton__link">FAQs</a>
                    </li>
                </ul>
            </div>


        </div>, document.getElementById('navigation-button')
    );
}

export default NavButton;