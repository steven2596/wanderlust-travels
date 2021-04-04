import React from 'react';

import './logo.styles.scss';

const Logo = ({ logoWhite }) => {
    return (
        <a href="/" className="logo__container">
            <span className="logo__part logo__part--1">W</span>
            <span className={`logo__part logo__part--2 ${logoWhite ? 'logo--white' : ''}`}>anderlust</span>
        </a>
    )
};

export default Logo;