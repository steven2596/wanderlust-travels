import React from 'react';

import './header.style.scss';

import Button from '../button/button';

const Header = () => (
    <div className='header' >
        <div className='header__container'>
            <h2 className="header__heading header__heading-1">discover</h2>
            <h1 className="header__heading header__heading-2">switzerland</h1>
            <Button route="/tours">Learn more</Button>
        </div>
    </div >
);

export default Header;