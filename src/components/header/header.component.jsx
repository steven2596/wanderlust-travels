import React from 'react';

import './header.style.scss';

import Fade from 'react-reveal/Fade';
import Button from '../button/button';


const Header = () => (
    <Fade duration={1500}>
        <div className='header' >
            <Fade bottom cascade duration={1000} delay={500}>
                <div className='header__container'>
                    <h2 className="header__heading header__heading-1">discover</h2>
                    <h1 className="header__heading header__heading-2">switzerland</h1>
                    <Button route="/tours" >Learn more</Button>
                </div>
            </Fade>
        </div >
    </Fade>
);

export default Header;