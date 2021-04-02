import React from 'react';

import './directory-menu.styles.scss';

import packageA from '../../assets/images/package-a-small.jpg';
import packageB from '../../assets/images/package-b-small.jpg';
import packageC from '../../assets/images/package-c-small.jpg';
import packageD from '../../assets/images/package-d-small.jpg';

const DirectoryMenu = () => {
    return (
        <div className="directory-menu" >

            <a href="/tours/package1" className="menu__link menu__link--1">
                <div className="menu__overlay" />
                <img src={packageA} alt="" className="menu__img" />
                <p className="menu__title">Package A</p>
            </a>

            <a href="/tours/package2" className="menu__link menu__link--2">
                <div className="menu__overlay" />
                <img src={packageB} alt="" className="menu__img" />
                <p className="menu__title">Package B</p>
            </a>

            <a href="/tours/package3" className="menu__link menu__link--3">
                <div className="menu__overlay" />
                <img src={packageC} alt="" className="menu__img" />
                <p className="menu__title">Package C</p>
            </a>

            <a href="/tours/package1" className="menu__link menu__link--4">
                <div className="menu__overlay" />
                <img src={packageD} alt="" className="menu__img" />
                <p className="menu__title">Package D</p>
            </a>

        </div>
    )
};

export default DirectoryMenu;